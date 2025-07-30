import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
			<Skeleton className="h-16 w-64 rounded-xl" />

			{[...Array(10).keys()].map((i) => (
				<Skeleton key={i} className="h-32 w-xl rounded-xl" />
			))}
		</div>
	);
}
