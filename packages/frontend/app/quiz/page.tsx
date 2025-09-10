"use client";

import { allChapters } from "@/public/data/allChapters";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
			<Link className="w-full" href="/quiz/settings">
				<Settings />
			</Link>

			{allChapters.map((chapter) => (
				<Link key={chapter.id} href={`quiz/${chapter.id}`} className="w-full">
					<div className="w-full flex flex-col">
						<div>第{chapter.id}章</div>
						<div className="text-16 font-bold">{chapter.title}</div>
					</div>
				</Link>
			))}
		</div>
	);
}
