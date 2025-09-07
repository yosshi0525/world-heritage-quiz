"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";
import { ConfigContext } from "../ConfigContext";
import { getChapter } from "./getChapter";
import { useQuiz } from "./useQuiz";

type Props = {
	params: Promise<{ chapterId: string }>;
};

export default function Page({ params }: Props) {
	const chapterId = Number(use(params).chapterId);
	const {
		config: { level },
	} = use(ConfigContext);

	const chapter = getChapter(chapterId) ?? notFound();

	const questions = useMemo(
		() =>
			chapter.heritages.map((heritage) => ({
				item: heritage,
				keywords: heritage.keywords.map((keyword) => keyword.text),
			})),
		[chapter],
	);

	const {
		question: { item: heritage, keywords },
		questionNumber,
		initialized,
		selectedKeywords,
		selections,
		showAnswer,
		isCorrect,
		isFinished,
		correctAnswerCount,
		correctAnswerRate,

		handleClickAnswer,
		handleClickNext,
		handleClickReset,
		handleClickSelection,
	} = useQuiz(questions, level);

	if (!initialized) return;

	function getSelectionButtonBorderColor(selection: string) {
		const borderColor = {
			default: "border-transparent",
			correct: "border-green-500",
			incorrect: "border-red-500",
		};

		if (!showAnswer) return borderColor.default;
		if (!keywords.includes(selection)) return borderColor.default;

		return selectedKeywords.includes(selection)
			? borderColor.correct
			: borderColor.incorrect;
	}

	function renderButton() {
		if (isFinished) {
			if (correctAnswerRate >= 0.8) {
				return (
					<Link href={`${chapterId + 1}`}>
						<Button>次のチャプターへ</Button>
					</Link>
				);
			}
			return <Button onClick={handleClickReset}>やりなおす</Button>;
		}
		if (showAnswer) {
			return <Button onClick={handleClickNext}>次へ</Button>;
		}
		return <Button onClick={handleClickAnswer}>答え合わせ</Button>;
	}

	return (
		<div className="w-dvw py-8 px-2">
			<div className="flex justify-between">
				<Link href="/quiz">戻る</Link>
				<Link href="/quiz/settings">
					<Settings />
				</Link>
			</div>
			<p>{level}</p>
			<p>
				第{chapter.id}章：{chapter.title}
			</p>
			<p className="text-xl">Q. {questionNumber}</p>
			<h1 className="text-2xl font-bold">{heritage.name}</h1>
			<p>登録年: {heritage.inscriptionYear}年</p>
			<p>国: {heritage.countries.join(" / ")}</p>

			<div className="flex flex-col gap-10 items-center py-4">
				<div className="flex gap-2 flex-wrap items-center grow">
					{selections.map((selection) => (
						<Button
							key={selection}
							type="button"
							onClick={() => {
								handleClickSelection(selection);
							}}
							variant={
								selectedKeywords.includes(selection) ? "secondary" : "default"
							}
							className={`max-w-full whitespace-normal break-words leading-snug text-justify py-1 border-2 h-auto ${getSelectionButtonBorderColor(selection)}`}
						>
							{selection}
						</Button>
					))}
				</div>

				<p>
					{selectedKeywords.length} / {heritage.keywords.length} 選択中
				</p>

				<div>{renderButton()}</div>
			</div>

			{correctAnswerCount}

			{showAnswer && <p>{isCorrect ? "正解" : "不正解"}</p>}

			{isFinished && <p>正答率：{correctAnswerRate * 100}%</p>}
		</div>
	);
}
