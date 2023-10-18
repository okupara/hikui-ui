import type { Config } from "tailwindcss";
import { hikuiThemePlugin } from "./hikui-theme-plugin";
import animatePlugin from "tailwindcss-animate";

export const hikuiThemePreset = {
    darkMode: ["class"],
    content: [],
    plugins: [animatePlugin, hikuiThemePlugin],
} satisfies Config