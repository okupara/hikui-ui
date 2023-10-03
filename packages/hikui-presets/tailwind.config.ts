import type { Config } from "tailwindcss";
import { hikuiThemePreset } from "@/lib/hikui-theme-preset"
// import { shadcnThemePlugin } from "./src/lib/shadcn-theme-plugin";

const config = {
  presets: [hikuiThemePreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // plugins: [shadcnThemePlugin],
} satisfies Config;

export default config
