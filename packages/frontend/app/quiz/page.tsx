import Link from "next/link";

export default function QuizPage() {
	const chapters = Array.from({ length: 39 }).map((_, i) => i + 2);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
			{chapters.map((chapter) => (
				<Link key={chapter} href={`quiz/${chapter}`}>
					第{chapter}章
				</Link>
			))}
		</div>
	);
}
