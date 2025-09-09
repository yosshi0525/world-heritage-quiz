export function unreachable(x: never): never {
	throw new Error(`Unreachable value: ${x}`);
}
