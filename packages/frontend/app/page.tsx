import { allChapters } from "@/public/data/allChapters";
import Link from "next/link";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				{allChapters.map((chapter) => (
					<Link key={chapter.id} href="/chapter/2">
						第{chapter.id}章: {chapter.title}
					</Link>
				))}
			</main>
		</div>
	);
}
