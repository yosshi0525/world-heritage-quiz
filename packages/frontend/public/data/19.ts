import type { Chapter } from "@/types/chapter";

export const chapter19: Chapter = {
	id: 19,
	title: "東南アジアと南アジア",
	heritages: [
		{
			id: 1,
			name: "シーギリヤの古代都市",
			countries: ["スリランカ"],
			heritageType: "文化",
			inscriptionYear: 1982,
			criteria: ["ii", "iii", "iv"],
			attributes: [],
			keywords: [
				{ text: "シンハラ王国", important: true },
				{ text: "カッサバ１世", important: true },
				{ text: "シーギリヤ・レディ", important: false },
			],
		},
		{
			id: 2,
			name: "ラジャスタンの丘陵城塞群",
			countries: ["インド"],
			heritageType: "文化",
			inscriptionYear: 2013,
			criteria: ["ii", "iii"],
			attributes: [],
			keywords: [
				{ text: "ラージブート諸国", important: true },
				{ text: "チットルガル城塞", important: false },
				{ text: "ラーナ・クンバ", important: true },
			],
		},
		{
			id: 3,
			name: "カトマンズの谷",
			countries: ["ネパール"],
			heritageType: "文化",
			inscriptionYear: 1979,
			criteria: ["iii", "iv", "vi"],
			attributes: [],
			keywords: [
				{ text: "ヒンドゥー教と仏教の融合", important: true },
				{ text: "ダルバール広場", important: true },
				{ text: "ラリトブル", important: false },
			],
		},
		{
			id: 4,
			name: "ジョグジャカルタの世界観を表す軸線と歴史的建造物群",
			countries: ["インドネシア"],
			heritageType: "文化",
			inscriptionYear: 2023,
			criteria: ["ii", "iii"],
			attributes: [],
			keywords: [
				{ text: "スルタン", important: false },
				{ text: "クラトン（宮殿）", important: true },
				{
					text: "ヒンドゥー教や仏教の宗教観や、生命のサイクル、神・人・自然の調和、神と人間のつながり",
					important: true,
				},
			],
		},
	],
};
