import { heritages11 } from "./11";
import { heritages2 } from "./2";
import { heritages4 } from "./4";
import { heritages6 } from "./6";

export const heritages = [
	...heritages2,
	...heritages4,
	...heritages6,
	...heritages11,
];

export const keywords = heritages
	.flatMap((heritage) => heritage.keywords)
	.map((keyword) => keyword.text);
