const levels = ["tutorial", "easy", "normal", "hard", "max"] as const;
export type Level = (typeof levels)[number];

export function getLevel(input: string | null): Level {
	if (input === undefined || Array.isArray(input)) {
		return "normal";
	}
	const levels: Level[] = ["tutorial", "easy", "normal", "hard", "max"];
	return levels.find((level) => level === input) ?? "normal";
}

export function getSelectionCount(
	level: Level,
	min: number,
	max: number,
): number {
	switch (level) {
		case "tutorial":
			return min;
		case "easy":
			return 5;
		case "normal":
			return 10;
		case "hard":
			return 20;
		case "max":
			return max;
		default:
			unreachable(level);
	}
}

function unreachable(x: never): never {
	throw new Error(`Unreachable value: ${x}`);
}
