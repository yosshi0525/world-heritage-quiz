"use client";

import { useEffect, useMemo, useState } from "react";
import { type Level, getSelectionCount } from "./utils";

type Question<T> = {
	item: T;
	keywords: string[];
};

export function useQuiz<T>(questions: Question<T>[], level: Level) {
	const initialOrder = Array.from({ length: questions.length }) //
		.map((_, i) => i);

	const [questionNumber, setQuestionNumber] = useState(1);
	const [initialized, setInitialized] = useState(false);
	const [order, setOrder] = useState(initialOrder);
	const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
	const [selections, setSelections] = useState<string[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isFinished, setIsFinished] = useState(false);
	const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

	const question = questions[order[questionNumber - 1]];
	const allKeywords = useMemo(
		() => [...new Set(questions.flatMap((heritage) => heritage.keywords))],
		[questions],
	);
	const correctAnswerRate = correctAnswerCount / questions.length;

	useEffect(() => {
		setOrder(order.sort(() => 0.5 - Math.random()));
		setInitialized(true);
	}, [order]);

	useEffect(() => {
		const selectionCount = getSelectionCount(
			level,
			question.keywords.length,
			allKeywords.length,
		);

		const selections = [...question.keywords];
		while (selections.length < selectionCount) {
			const i = Math.floor(Math.random() * allKeywords.length);
			const next = allKeywords[i];
			if (!selections.includes(next)) {
				selections.push(next);
			}
		}
		selections.sort(() => 0.5 - Math.random());
		setSelections(selections);
	}, [allKeywords, question, level]);

	const handleClickSelection = (keyword: string) => {
		if (selectedKeywords.some((k) => k === keyword)) {
			setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
		} else {
			setSelectedKeywords([...selectedKeywords, keyword]);
		}
	};

	const checkAnswer = () =>
		selectedKeywords.length === question.keywords.length &&
		question.keywords.every((keyword) => selectedKeywords.includes(keyword));

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
		if (questionNumber < questions.length) {
			setQuestionNumber(questionNumber + 1);
		} else {
			setIsFinished(true);
		}
	};

	const handleClickReset = () => {
		setSelectedKeywords([]);
		setIsCorrect(null);
		setShowAnswer(false);
		setCorrectAnswerCount(0);
		setIsFinished(false);
		setQuestionNumber(1);
		setOrder(order.sort(() => 0.5 - Math.random()));
	};

	return {
		question,
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
	};
}
