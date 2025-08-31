import type { Chapter } from "@/types/chapter";

export const chapter32: Chapter = {
	id: 32,
	title: "氷河地形",
	heritages: [
		{
			id: 1,
			name: "ヨセミテ国立公園",
			countries: ["アメリカ"],
			heritageType: "自然",
			inscriptionYear: 1984,
			criteria: ["vii", "viii"],
			attributes: [],
			keywords: [
				{ text: "モレーン", important: true },
				{ text: "ハーフドーム", important: false },
				{ text: "ウィルダネス", important: true },
			],
		},
		{
			id: 2,
			name: "イルリサット・アイスフィヨルド",
			countries: ["デンマーク"],
			heritageType: "自然",
			inscriptionYear: 2004,
			criteria: ["vii", "viii"],
			attributes: [],
			keywords: [
				{ text: "グリーンランド", important: false },
				{ text: "セルメク・クジャレク氷河", important: true },
			],
		},
		{
			id: 3,
			name: "テ・ワヒポウナム",
			countries: ["ニュージーランド"],
			heritageType: "自然",
			inscriptionYear: 1990,
			criteria: ["vii", "viii", "ix", "x"],
			attributes: [],
			keywords: [
				{ text: "氷河作用と地殻変動による景観", important: false },
				{ text: "キウイ", important: true },
			],
		},
		{
			id: 4,
			name: "サーメ人地域",
			countries: ["スウェーデン"],
			heritageType: "複合",
			inscriptionYear: 1996,
			criteria: ["iii", "v", "vii", "viii", "ix"],
			attributes: [],
			keywords: [
				{ text: "ラップランド", important: true },
				{ text: "トナカイの放牧", important: false },
			],
		},
		{
			id: 5,
			name: "雲南保護地域の三江併流群",
			countries: ["中国"],
			heritageType: "自然",
			inscriptionYear: 2003,
			criteria: ["vii", "viii", "ix", "x"],
			attributes: [],
			keywords: [
				{ text: "横断山脈", important: false },
				{ text: "明永氷河", important: true },
			],
		},
	],
};
