import type { Chapter } from "@/types/chapter";

export const chapter40: Chapter = {
	id: 40,
	title: "絶滅危惧種",
	heritages: [
		{
			id: 1,
			name: "コモド国立公園",
			countries: ["インドネシア"],
			heritageType: "自然",
			inscriptionYear: 1991,
			criteria: ["vii", "x"],
			attributes: [],
			keywords: [
				{ text: "小スンダ列島", important: false },
				{ text: "コモドオオトカゲ（コモドドラゴン）", important: true },
				{ text: "気候変動による海面上昇", important: true },
			],
		},
		{
			id: 2,
			name: "リオ・プラタノ生物圏保存地域",
			countries: ["ホンジュラス"],
			heritageType: "自然",
			inscriptionYear: 1982,
			criteria: ["vii", "viii", "ix", "x"],
			attributes: ["危機遺産"],
			keywords: [
				{ text: "プラタノ川", important: true },
				{ text: "コンゴウインコ", important: false },
			],
		},
		{
			id: 3,
			name: "四川省のジャイアントパンダ保護区群",
			countries: ["中国"],
			heritageType: "自然",
			inscriptionYear: 2006,
			criteria: ["x"],
			attributes: [],
			keywords: [
				{ text: "レッサーパンダ", important: true },
				{ text: "ウンピョウ", important: false },
			],
		},
		{
			id: 4,
			name: "オザラ・コクアの森林山塊",
			countries: ["コンゴ共和国"],
			heritageType: "自然",
			inscriptionYear: 2023,
			criteria: ["ix", "x"],
			attributes: [],
			keywords: [
				{ text: "霊長類", important: false },
				{ text: "ニシローランドゴリラ", important: true },
			],
		},
		{
			id: 5,
			name: "ソコトラ諸島",
			countries: ["イエメン"],
			heritageType: "自然",
			inscriptionYear: 2008,
			criteria: ["x"],
			attributes: [],
			keywords: [
				{ text: "アフリカの角", important: false },
				{ text: "リュウケツジュ（竜血樹）", important: true },
			],
		},
	],
};
