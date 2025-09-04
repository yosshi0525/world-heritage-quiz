import { createContext } from "react";
import type { Level } from "./[chapterId]/utils";

export type Config = {
	level: Level;
};

export const ConfigContext = createContext<{
	config: Config;
	setConfig: (config: Config) => void;
}>({ config: { level: "normal" }, setConfig: (_config: Config) => {} });
