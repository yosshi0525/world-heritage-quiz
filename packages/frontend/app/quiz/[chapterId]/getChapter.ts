import { allChapters } from "@/public/data/allChapters";

export function getChapter(id: number) {
	const chapter = allChapters.find((chapter) => chapter.id === id);
	return chapter;
}
