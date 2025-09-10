import { getChapter } from "@/app/quiz/[chapterId]/getChapter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
	const { id } = await params;
	const chapter = getChapter(Number(id));
	if (!chapter) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-20">
			<h1 className="text-2xl font-bold">
				{id}. {chapter.title}
			</h1>

			{chapter.heritages.map((heritage) => (
				<Card key={heritage.id} className="w-full max-w-xl">
					<CardHeader>
						<span>{heritage.countries.join("/")}</span>
						<CardTitle className="text-lg">{heritage.name}</CardTitle>
					</CardHeader>
					<CardContent className="text-sm flex flex-col gap-5">
						<div className="flex gap-2">
							<span>{heritage.heritageType}遺産</span>
							<span>{heritage.inscriptionYear}年</span>
							<ul className="flex content-center gap-1">
								{heritage.criteria.map((criteria) => (
									<li key={criteria}>({criteria})</li>
								))}
							</ul>
						</div>

						<ul>
							{heritage.keywords.map((keyword) => (
								<li
									key={keyword.text}
									className={
										keyword.important ? "text-red-500 font-bold" : "font-bold"
									}
								>
									{keyword.text}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
