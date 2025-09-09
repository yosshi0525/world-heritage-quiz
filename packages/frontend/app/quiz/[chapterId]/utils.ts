import { levels, selectionCount } from "@/config/level";
import { unreachable } from "@/utils/panic";

export type Level = (typeof levels)[number];

export function getLevel(input: string | null): Level {
	return levels.find((level) => level === input) ?? "normal";
}

function getDefaultSelectionCount(
	level: Level,
	min: number,
	max: number,
): number {
	switch (level) {
		case "tutorial":
			return min;
		case "easy":
			return selectionCount.easy;
		case "normal":
			return selectionCount.normal;
		case "hard":
			return selectionCount.hard;
		case "max":
			return max;
		default:
			unreachable(level);
	}
}

export function getSelectionCount(
	level: Level,
	min: number,
	max: number,
): number {
	const defaultCount = getDefaultSelectionCount(level, min, max);
	return Math.min(defaultCount, max);
}
