import { getChapter } from "@/app/quiz/[chapterId]/getChapter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const chapterName = "日本の遺産";
	const chapter = getChapter(Number(id));
	if (!chapter) {
		notFound();
	}
	const heritages = chapter.heritages;

	return (
		<div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
			<h1 className="text-4xl font-bold">
				{id}. {chapterName}
			</h1>

			{heritages.map((heritage) => (
				<Card key={heritage.id} className="w-xl">
					<CardHeader>
						<CardTitle>{heritage.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<div>{heritage.heritageType}</div>
						<div>{heritage.inscriptionYear}年</div>
						<ul className="flex content-center gap-2">
							{heritage.criteria.map((criteria) => (
								<li key={criteria}>({criteria})</li>
							))}
						</ul>
						<ul>
							{heritage.keywords.map((keyword) => (
								<li
									key={keyword.text}
									className={
										keyword.important ? "text-red-500 font-bold" : "font-bold"
									}
								>
									「{keyword.text}」
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
