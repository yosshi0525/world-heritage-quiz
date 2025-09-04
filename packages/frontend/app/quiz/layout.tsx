"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import { type Config, ConfigContext } from "./ConfigContext";

export default function Layout({ children }: PropsWithChildren) {
	const [config, setConfig] = useState<Config>({
		level: "normal",
		showCountries: false,
	});

	// マウント時に sessionStorage から復元
	useEffect(() => {
		const configString = sessionStorage.getItem("config");
		if (configString) {
			const config = JSON.parse(configString) as Config;
			setConfig(config);
		}
	}, []);

	// 値が変わるたびに保存
	const updateConfig = (config: Config) => {
		setConfig(config);
		sessionStorage.setItem("config", JSON.stringify(config));
	};

	return (
		<ConfigContext value={{ config, setConfig: updateConfig }}>
			{children}
		</ConfigContext>
	);
}
