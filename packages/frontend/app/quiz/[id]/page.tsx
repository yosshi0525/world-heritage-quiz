"use client";

import { Button } from "@/components/ui/button";
import { use, useEffect, useMemo, useState } from "react";
import { heritages, keywords } from "@/public/data/heritages";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ id: string }>;
};

export default function Page({ params }: Props) {
	const id = Number(use(params).id);
	const heritage = heritages.find((heritage) => heritage.id === id);

	const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

	if (heritage == null) notFound();

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
	}, [heritage]);

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
