import type { Chapter } from "@/types/chapter";

export const chapter29: Chapter = {
	id: 29,
	title: "記憶の場",
	heritages: [
		{
			id: 1,
			name: "ルワンダ虐殺の記憶の場：ニャマタ、ムランビ、ギソジ、ビセセロ",
			countries: ["ルワンダ"],
			heritageType: "文化",
			inscriptionYear: 2023,
			criteria: ["vi"],
			attributes: ["負の遺産"],
			keywords: [
				{ text: "ルワンダ内戦", important: false },
				{ text: "ジェノサイド", important: true },
				{ text: "ツチ族", important: true },
			],
		},
		{
			id: 2,
			name: "ESMA博物館と記憶の場：拘禁と拷問、虐殺のかつての機密拠点",
			countries: ["アルゼンチン"],
			heritageType: "文化",
			inscriptionYear: 2023,
			criteria: ["iv"],
			attributes: ["負の遺産"],
			keywords: [{ text: "汚い戦争", important: true }],
		},
		{
			id: 3,
			name: "第一次世界大戦（西部戦線）の慰霊と記憶の場",
			countries: ["フランス", "ベルギー"],
			heritageType: "文化",
			inscriptionYear: 2023,
			criteria: ["iii", "iv", "vi"],
			attributes: [],
			keywords: [
				{
					text: "一人ひとりが出身国や身分に関わらず平等に弔われた",
					important: true,
				},
			],
		},
		{
			id: 4,
			name: "人権と自由、和解：ネルソン・マンデラの遺産",
			countries: ["南アフリカ"],
			heritageType: "文化",
			inscriptionYear: 2024,
			criteria: ["vi"],
			attributes: ["負の遺産"],
			keywords: [{ text: "ウブントゥ", important: true }],
		},
	],
};
