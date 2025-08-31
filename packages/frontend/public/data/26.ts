import type { Chapter } from "@/types/chapter";

export const chapter26: Chapter = {
	id: 26,
	title: "近代国家",
	heritages: [
		{
			id: 1,
			name: "ドロットニングホルムの王領地",
			countries: ["スウェーデン"],
			heritageType: "文化",
			inscriptionYear: 1991,
			criteria: ["iv"],
			attributes: [],
			keywords: [
				{ text: "３人の王妃", important: true },
				{ text: "フランス・バロック様式", important: true },
				{ text: "ロヴィーサ・ウルリカ", important: false },
			],
		},
		{
			id: 2,
			name: "ヴェルサイユ宮殿と庭園",
			countries: ["フランス"],
			heritageType: "文化",
			inscriptionYear: 1979,
			criteria: ["i", "ii", "vi"],
			attributes: [],
			keywords: [
				{ text: "ルイ１４世", important: true },
				{ text: "フランス・バロック様式の最高傑作", important: false },
			],
		},
		{
			id: 3,
			name: "ポツダムとベルリンの宮殿と庭園",
			countries: ["ドイツ"],
			heritageType: "文化",
			inscriptionYear: 1990,
			criteria: ["i", "ii", "iv"],
			attributes: [],
			keywords: [
				{ text: "フリードリヒ２世", important: true },
				{ text: "ツェツィーリエンホーフ宮殿", important: false },
			],
		},
		{
			id: 4,
			name: "シェーンブルン宮殿と庭園",
			countries: ["オーストリア"],
			heritageType: "文化",
			inscriptionYear: 1996,
			criteria: ["i", "iv"],
			attributes: [],
			keywords: [
				{ text: "マリア・テレジア", important: false },
				{ text: "フィッシャー・フォン・エアラッハ", important: true },
				{ text: "ウィーン会議", important: true },
			],
		},
		{
			id: 5,
			name: "マドリードのエル・エスコリアール修道院と王立施設",
			countries: ["スペイン"],
			heritageType: "文化",
			inscriptionYear: 1984,
			criteria: ["i", "ii", "vi"],
			attributes: [],
			keywords: [
				{ text: "フェリペ２世", important: true },
				{ text: "王立の複合施設", important: false },
			],
		},
		{
			id: 6,
			name: "サンクト・ペテルブルクの歴史地区と関連建造物群",
			countries: ["ロシア"],
			heritageType: "文化",
			inscriptionYear: 1990,
			criteria: ["i", "ii", "iv", "vi"],
			attributes: [],
			keywords: [
				{ text: "ピョートル大帝", important: true },
				{ text: "エルミタージュ美術館", important: false },
			],
		},
	],
};
