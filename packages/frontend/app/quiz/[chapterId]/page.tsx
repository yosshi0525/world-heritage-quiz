"use client";

import { Button } from "@/components/ui/button";
import { allChapters } from "@/public/data/heritages";
import { notFound } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";

type Props = {
	params: Promise<{ chapterId: string }>;
};

export default function Page({ params }: Props) {
	const chapterId = Number(use(params).chapterId);
	const chapter = allChapters.find((heritage) => heritage.id === chapterId);
	if (chapter == null) notFound();

	const heritage = chapter.heritages[0];
	const keywords = useMemo(
		() =>
			chapter.heritages
				.flatMap((heritage) => heritage.keywords)
				.map((keyword) => keyword.text),
		[chapter],
	);

	const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

	const [selections, setSelections] = useState<string[]>([]);

	useEffect(() => {
		const selections = heritage.keywords.map((k) => k.text);
		while (selections.length < 20) {
			const i = Math.floor(Math.random() * keywords.length);
			const next = keywords[i];
			if (!selections.includes(next)) {
				selections.push(next);
			}
		}
		selections.sort(() => 0.5 - Math.random());
		setSelections(selections);
	}, [heritage, keywords]);

	const handleClick = (keyword: string) => {
		if (selectedKeywords.some((k) => k === keyword)) {
			setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
		} else {
			setSelectedKeywords([...selectedKeywords, keyword]);
		}
	};

	const handleClickAnswer = () => {
		if (selectedKeywords.length !== heritage.keywords.length)
			return console.log("不正解");
		for (const k of heritage.keywords) {
			if (!selectedKeywords.includes(k.text)) return console.log("不正解");
		}
		return console.log("正解");
	};

	return (
		<div>
			<h1 className="text-2xl font-bold">{heritage.name}</h1>
			<p>登録年{heritage.inscriptionYear}年</p>

			<div className="flex gap-1 flex-wrap">
				{selections.map((keyword) => (
					<Button
						key={keyword}
						type="button"
						onClick={() => {
							handleClick(keyword);
						}}
						variant={
							selectedKeywords.includes(keyword) ? "secondary" : "default"
						}
					>
						{keyword}
					</Button>
				))}
			</div>

			<Button onClick={handleClickAnswer}>答え合わせ</Button>
		</div>
	);
}
