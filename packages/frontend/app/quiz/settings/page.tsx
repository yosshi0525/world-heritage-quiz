"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { type MouseEventHandler, use } from "react";
import { ConfigContext } from "../ConfigContext";
import type { Level } from "../[chapterId]/utils";

export default function SettingsPage() {
	const context = use(ConfigContext);
	const router = useRouter();

	if (!context) return;

	const { config, setConfig } = context;

	const selections = [
		{ value: "tutorial", label: "チュートリアル" },
		{ value: "easy", label: "簡単" },
		{ value: "normal", label: "普通" },
		{ value: "hard", label: "難しい" },
		{ value: "max", label: "マックス" },
	] as const;

	const handleClickLevel: MouseEventHandler<HTMLButtonElement> = (e) => {
		const level = e.currentTarget.value as Level;
		console.log({ level });
		setConfig({ ...config, level });
	};

	const toggleShowCountries = () => {
		setConfig({
			...config,
			showCountries: !config.showCountries,
		});
	};

	return (
		<div>
			<div className="flex flex-col p-5 gap-5">
				<h2 className="font-bold">難易度</h2>
				<RadioGroup defaultValue={config.level}>
					{selections.map(({ value, label }) => (
						<div key={value} className="flex items-center space-x-2">
							<RadioGroupItem
								value={value}
								id={value}
								onClick={handleClickLevel}
							/>
							<Label htmlFor={value}>{label}</Label>
						</div>
					))}
				</RadioGroup>

				<h2>国の表示</h2>
				<Switch
					defaultChecked={config.showCountries}
					onClick={toggleShowCountries}
				/>
			</div>
			<Button onClick={() => router.back()}>戻る</Button>
		</div>
	);
}
