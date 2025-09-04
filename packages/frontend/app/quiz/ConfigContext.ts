import { createContext } from "react";
import type { Level } from "./[chapterId]/utils";

export type Config = {
	level: Level;
	showCountries: boolean;
};

export const ConfigContext = createContext<{
	config: Config;
	setConfig: (config: Config) => void;
}>({
	config: { level: "normal", showCountries: true },
	setConfig: (_config: Config) => {},
});
