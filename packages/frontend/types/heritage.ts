import type { Country } from "./countries";

type Keyword = {
	text: string;
	important: boolean;
};

export type Heritage = {
	id: number;
	name: string;
	countries: Country[];
	heritageType: "文化" | "自然" | "複合";
	inscriptionYear: number;
	criteria: (
		| "i"
		| "ii"
		| "iii"
		| "iv"
		| "v"
		| "vi"
		| "vii"
		| "viii"
		| "ix"
		| "x"
	)[];
	attributes: (
		| "負の遺産"
		| "文化的景観"
		| "危機遺産"
		| "シリアルサイト"
		| "トランスバウンダリー"
	)[];
	keywords: Keyword[];
};
