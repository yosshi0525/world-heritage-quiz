"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { use } from "react";
import { LevelContext } from "../LevelContext";
import type { Level } from "../[chapterId]/utils";

export default function SettingsPage() {
	const { level, setLevel } = use(LevelContext);
	const router = useRouter();

	const selections = [
		{ value: "tutorial", label: "チュートリアル" },
		{ value: "easy", label: "簡単" },
		{ value: "normal", label: "普通" },
		{ value: "hard", label: "難しい" },
		{ value: "max", label: "マックス" },
	] as const;

	const handleClick: React.FormEventHandler<HTMLButtonElement> = (e) => {
		const level = e.currentTarget.value as Level;
		setLevel(level);
	};

	return (
		<div className="flex flex-col p-5 gap-5">
			<h2 className="font-bold">難易度</h2>
			<RadioGroup defaultValue={level}>
				{selections.map(({ value, label }) => (
					<div key={value} className="flex items-center space-x-2">
						<RadioGroupItem value={value} id={value} onChange={handleClick} />
						<Label htmlFor={value}>{label}</Label>
					</div>
				))}
			</RadioGroup>

			<Button onClick={() => router.back()}>戻る</Button>
		</div>
	);
}
