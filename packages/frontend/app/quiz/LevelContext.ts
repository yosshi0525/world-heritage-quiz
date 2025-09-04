import { createContext } from "react";
import type { Level } from "./[chapterId]/utils";

export const LevelContext = createContext<{
	level: Level;
	setLevel: (level: Level) => void;
}>({ level: "normal", setLevel: (level: Level) => {} });
