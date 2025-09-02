"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { getChapter } from "./getChapter";
import { getLevel, getSelectionCount } from "./utils";

type Props = {
	params: Promise<{ chapterId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Page({ params, searchParams }: Props) {
	const chapterId = Number(use(params).chapterId);
	const levelInput = use(searchParams).level;
	const level = getLevel(levelInput);

	const chapter = getChapter(chapterId);

	if (!chapter) {
		notFound();
	}

	const [questionNumber, setQuestionNumber] = useState(1);

	const [order, setOrder] = useState(
		Array.from({ length: chapter.heritages.length }).map((_, i) => i),
	);
	const heritage = chapter.heritages[order[questionNumber - 1]];
	const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
	const [selections, setSelections] = useState<string[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isFinished, setIsFinished] = useState(false);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setOrder(order.sort(() => 0.5 - Math.random()));
	}, [order]);

	useEffect(() => {
		const allKeywords = [
			...new Set(
				chapter.heritages
					.flatMap((heritage) => heritage.keywords)
					.map((keyword) => keyword.text),
			),
		];
		const selectionCount = getSelectionCount(
			level,
			heritage.keywords.length,
			allKeywords.length,
		);

		const selections = heritage.keywords.map((k) => k.text);
		while (selections.length < Math.min(selectionCount, allKeywords.length)) {
			const i = Math.floor(Math.random() * allKeywords.length);
			const next = allKeywords[i];
			if (!selections.includes(next)) {
				selections.push(next);
			}
			selections.sort(() => 0.5 - Math.random());
		}
		setSelections(selections);
		setLoading(false);
	}, [chapter, heritage, level]);

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
			setLoading(true);
		} else {
			setIsFinished(true);
		}
	};

	if (loading) {
		return;
	}

	return (
		<div className="max-w-dvw py-8 px-2">
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
						<Button onClick={handleClickAnswer}>答え合わせ</Button>
					)}
				</div>
			</div>

			{correctAnswerCount}

			{showAnswer && <p>{isCorrect ? "正解" : "不正解"}</p>}

			{isFinished && (
				<p>正答率：{(correctAnswerCount / chapter.heritages.length) % 0.01}</p>
			)}
			{correctAnswerCount === chapter.heritages.length && (
				<Link href={`quiz/${chapterId + 1}`}>次のチャプターへ</Link>
			)}
		</div>
	);
}
