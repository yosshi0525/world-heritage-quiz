"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { use } from "react";
import { LevelContext } from "../LevelContext";

export default function SettingsPage() {
	const { level, setLevel } = use(LevelContext);

	const selections = [
		{ value: "tutorial", label: "チュートリアル" },
		{ value: "easy", label: "簡単" },
		{ value: "normal", label: "普通" },
		{ value: "hard", label: "難しい" },
		{ value: "max", label: "マックス" },
	] as const;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setLevel(e.target.value);
	};

	return (
		<div>
			<h2>難易度</h2>
			<RadioGroup defaultValue={level}>
				{selections.map(({ value, label }) => (
					<div key={value} className="flex items-center space-x-2">
						<RadioGroupItem value={value} id={value} onClick={handleClick} />
						<Label htmlFor={value}>{label}</Label>
					</div>
				))}
			</RadioGroup>

			<Link href="/quiz">戻る</Link>
		</div>
	);
}
