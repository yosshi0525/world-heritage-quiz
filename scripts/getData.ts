type Heritage = {
	id: number;
	name: string;
	countries: string[];
	heritageType: "cultural" | "natural" | "mixed";
	inscriptionYear: number;
	criteria: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)[];
	attributes: (
		| "negative"
		| "culturalLandscape"
		| "inDanger"
		| "serialSite"
		| "transboundary"
	)[];
	keywords: string[];
};

// Wikipedia APIでページの概要を取得
async function fetchWikipediaSummary(title: string): Promise<string> {
	const url = `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
		title,
	)}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${title}`);
	const data = await res.json();
	return data.extract || "";
}

// データをHeritage型に変換（簡易例）
async function createHeritageData(
	titles: string[],
	startId = 1,
): Promise<Heritage[]> {
	const results: Heritage[] = [];

	for (const [i, title] of titles.entries()) {
		const summary = await fetchWikipediaSummary(title);

		// 簡易的にキーワードを抽出（句点で分割）
		const keywords = summary
			.split("。")
			.map((s) => s.trim())
			.filter(Boolean);

		// ここでは例として日本文化遺産として仮設定
		const heritage: Heritage = {
			id: startId + i,
			name: title,
			countries: ["Japan"], // 国は仮値
			heritageType: "cultural", // 仮値
			inscriptionYear: 2000, // 仮値
			criteria: [1], // 仮値
			attributes: [], // 仮値
			keywords: keywords.slice(0, 5), // 最初の5文をキーワード代わりに
		};

		results.push(heritage);
	}

	return results;
}

// 使用例
(async () => {
	const titles = [
		"北海道・北東北の縄文遺跡群",
		"平泉",
		"佐渡金山",
		"紅河ハニ棚田",
	];

	const heritageData = await createHeritageData(titles, 201);
	console.log(JSON.stringify(heritageData, null, 2));
})();
