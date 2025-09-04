"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import { LevelContext } from "./LevelContext";
import type { Level } from "./[chapterId]/utils";

export default function Layout({ children }: PropsWithChildren) {
	const [level, setLevel] = useState<Level>("normal");

	// マウント時に sessionStorage から復元
	useEffect(() => {
		const saved = sessionStorage.getItem("level") as Level | null;
		if (saved) setLevel(saved);
	}, []);

	// 値が変わるたびに保存
	const updateLevel = (level: Level) => {
		setLevel(level);
		sessionStorage.setItem("level", level);
	};

	return (
		<LevelContext value={{ level, setLevel: updateLevel }}>
			{children}
		</LevelContext>
	);
}
