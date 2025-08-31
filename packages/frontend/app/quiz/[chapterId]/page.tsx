"use client";

import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";
import { getChapter } from "./getChapter";

type Props = {
	params: Promise<{ chapterId: string }>;
};

const N = 10;

export default function Page({ params }: Props) {
	const chapterId = Number(use(params).chapterId);
	const chapter = getChapter(chapterId);

	if (!chapter) {
		notFound();
	}

	const order = useMemo(() => {
		return Array.from({ length: chapter.heritages.length })
			.map((_, i) => i)
			.sort(() => 0.5 - Math.random());
	}, [chapter]);

	const [questionNumber, setQuestionNumber] = useState(1);

	const heritage = chapter.heritages[order[questionNumber - 1]];

	const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
	const [selections, setSelections] = useState<string[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isFinished, setIsFinished] = useState(false);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

	useEffect(() => {
		const allKeywords = chapter.heritages
			.flatMap((heritage) => heritage.keywords)
			.map((keyword) => keyword.text);

		const selections = heritage.keywords.map((k) => k.text);
		while (selections.length < N) {
			const i = Math.floor(Math.random() * allKeywords.length);
			const next = allKeywords[i];
			if (!selections.includes(next)) {
				selections.push(next);
			}
			selections.sort(() => 0.5 - Math.random());
			setSelections(selections);
		}
	}, [chapter, heritage]);

	const handleClickSelection = (keyword: string) => {
		if (selectedKeywords.some((k) => k === keyword)) {
			setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
		} else {
			setSelectedKeywords([...selectedKeywords, keyword]);
		}
	};

	const checkAnswer = () =>
		selectedKeywords.length === heritage.keywords.length &&
		heritage.keywords.every((keyword) =>
			selectedKeywords.includes(keyword.text),
		);

	const handleClickAnswer = () => {
		if (checkAnswer()) {
			setIsCorrect(true);
			setCorrectAnswerCount(correctAnswerCount + 1);
		} else {
			setIsCorrect(false);
		}
		setShowAnswer(true);
	};

	const handleClickNext = () => {
		setSelectedKeywords([]);
		setIsCorrect(null);
		setShowAnswer(false);
		if (questionNumber < chapter.heritages.length) {
			setQuestionNumber(questionNumber + 1);
		} else {
			setIsFinished(true);
		}
	};

	return (
		<div className="max-w-2xl p-16">
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
							className={
								showAnswer &&
								heritage.keywords
									.map((keyword) => keyword.text)
									.includes(selection)
									? selectedKeywords.includes(selection)
										? "border-2 border-green-500"
										: "border-2 border-red-500"
									: "border-2 border-transparent"
							}
						>
							{selection}
						</Button>
					))}
				</div>

				<p>
					{selectedKeywords.length} / {heritage.keywords.length} 選択中
				</p>

				<div>
					{showAnswer ? (
						<Button onClick={handleClickNext}>次へ</Button>
					) : (
						<Button
							onClick={handleClickAnswer}
							// disabled={!(selectedKeywords.length === heritage.keywords.length )}
						>
							答え合わせ
						</Button>
					)}
				</div>
			</div>

			{correctAnswerCount}

			{showAnswer && <p>{isCorrect ? "正解" : "不正解"}</p>}

			{isFinished && (
				<p>正答数：{correctAnswerCount / chapter.heritages.length}</p>
			)}
		</div>
	);
}
