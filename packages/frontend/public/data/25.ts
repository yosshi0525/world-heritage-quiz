import type { Chapter } from "@/types/chapter";

export const chapter25: Chapter = {
	id: 25,
	title: "混ざり合う文化（文化交流）",
	heritages: [
		{
			id: 1,
			name: "ストラスブール：グラン・ディルからヌースタットのヨーロッパの都市景観",
			countries: ["フランス"],
			heritageType: "文化",
			inscriptionYear: 1988,
			criteria: ["ii", "iv"],
			attributes: [],
			keywords: [
				{ text: "アルザス", important: false },
				{ text: "街道の街", important: true },
				{ text: "欧州議会", important: false },
			],
		},
		{
			id: 2,
			name: "セビーリャの大聖堂、アルカサル、インディアス古文書館",
			countries: ["スペイン"],
			heritageType: "文化",
			inscriptionYear: 1987,
			criteria: ["i", "ii", "iii", "vi"],
			attributes: [],
			keywords: [
				{ text: "ヨーロッパとイスラムが融合した", important: false },
				{ text: "ヒラルダの塔", important: true },
			],
		},
		{
			id: 3,
			name: "グラナダのアルハンブラ宮殿、ヘネラリーフェ離宮、アルバイシン地区",
			countries: ["スペイン"],
			heritageType: "文化",
			inscriptionYear: 1984,
			criteria: ["i", "iii", "iv"],
			attributes: [],
			keywords: [
				{ text: "ナスル朝", important: true },
				{ text: "アラベスク模様", important: false },
			],
		},
		{
			id: 4,
			name: "カザン・クレムリンの歴史的関連建造物群",
			countries: ["ロシア"],
			heritageType: "文化",
			inscriptionYear: 2000,
			criteria: ["ii", "iii", "iv"],
			attributes: [],
			keywords: [
				{
					text: "イスラムとロシア正教の影響を受けた歴史的建築物",
					important: false,
				},
				{ text: "ブラゴヴェシェンスキー大聖堂", important: true },
				{ text: "シュユンベキ塔", important: true },
			],
		},
		{
			id: 5,
			name: "トゥルグジウにあるブランクーシの彫刻作品群",
			countries: ["ルーマニア"],
			heritageType: "文化",
			inscriptionYear: 2024,
			criteria: ["i", "ii"],
			attributes: [],
			keywords: [
				{
					text: "第一次世界大戦中に街を守るために命を落とした兵士、警察、市民の犠牲を記念して建造された",
					important: false,
				},
				{ text: "無限柱", important: true },
			],
		},
		{
			id: 6,
			name: "チャトラパティ・シヴァージー・ターミナス駅（旧名ヴィクトリア・ターミナス）",
			countries: ["インド"],
			heritageType: "文化",
			inscriptionYear: 2004,
			criteria: ["ii", "iv"],
			attributes: [],
			keywords: [
				{ text: "ゴシック・リバイバル様式", important: true },
				{ text: "英国とインドの文化の融合", important: false },
			],
		},
	],
};
