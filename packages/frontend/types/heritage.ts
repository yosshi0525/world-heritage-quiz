import type { Country } from "./countries";

type HeritageType = "文化" | "自然" | "複合";

export type Criteria =
	| "i"
	| "ii"
	| "iii"
	| "iv"
	| "v"
	| "vi"
	| "vii"
	| "viii"
	| "ix"
	| "x";

type Attribute = "負の遺産" | "文化的景観" | "危機遺産";

type Keyword = {
	text: string;
	important: boolean;
};

export type Heritage = {
	id: number;
	name: string;
	countries: Country[];
	heritageType: HeritageType;
	inscriptionYear: number;
	criteria: Criteria[];
	attributes: Attribute[];
	keywords: Keyword[];
};
