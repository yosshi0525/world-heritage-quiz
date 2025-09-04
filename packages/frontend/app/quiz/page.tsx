"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function QuizPage() {
	const searchParams = useSearchParams();
	const chapters = Array.from({ length: 39 }).map((_, i) => i + 2);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center w-full min-h-screen p-8 pb-20 gap-6 sm:p-20">
			{chapters.map((chapter) => (
				<Link key={chapter} href={`quiz/${chapter}?${searchParams.toString()}`}>
					第{chapter}章
				</Link>
			))}
		</div>
	);
}
