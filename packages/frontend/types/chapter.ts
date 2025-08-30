import type { Heritage } from "./heritage";

export type Chapter = {
	id: number;
	title: string;
	heritages: Heritage[];
};
