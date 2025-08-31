import type { Chapter } from "@/types/chapter";

export const chapter36: Chapter = {
	id: 36,
	title: "火山",
	heritages: [
		{
			id: 1,
			name: "ハワイ火山国立公園",
			countries: ["アメリカ"],
			heritageType: "自然",
			inscriptionYear: 1987,
			criteria: ["viii"],
			attributes: [],
			keywords: [
				{ text: "マウナ・ロア山", important: true },
				{ text: "キラウエア山", important: true },
				{ text: "溶岩の粘性が低く、小さな爆発を繰り返す", important: false },
			],
		},
		{
			id: 2,
			name: "プレ山及びマルティニーク島北部の峻峰群の火山と森林",
			countries: ["フランス"],
			heritageType: "自然",
			inscriptionYear: 2023,
			criteria: ["viii", "x"],
			attributes: [],
			keywords: [
				{ text: "サン・ピエール", important: false },
				{ text: "プレ式噴火", important: true },
			],
		},
		{
			id: 3,
			name: "スルツェイ火山島",
			countries: ["アイスランド"],
			heritageType: "自然",
			inscriptionYear: 2008,
			criteria: ["ix"],
			attributes: [],
			keywords: [
				{ text: "海底噴火", important: true },
				{ text: "火の神スルト", important: false },
			],
		},
		{
			id: 4,
			name: "カムチャツカ火山群",
			countries: ["ロシア"],
			heritageType: "自然",
			inscriptionYear: 1996,
			criteria: ["vii", "viii", "ix", "x"],
			attributes: [],
			keywords: [
				{ text: "玄武岩マグマ", important: true },
				{ text: "ユーラシア大陸から孤立している", important: false },
			],
		},
		{
			id: 5,
			name: "済州火山島と溶岩洞窟群",
			countries: ["韓国"],
			heritageType: "自然",
			inscriptionYear: 2007,
			criteria: ["vii", "viii"],
			attributes: [],
			keywords: [
				{ text: "城山日出峰", important: true },
				{ text: "世界で最も長く複雑な溶岩洞窟", important: false },
			],
		},
	],
};
