import plugin from "tailwindcss/plugin";

export const hikuiThemePlugin = plugin(
  // 1. Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--subtext": "198 27% 43%",
        "--gray-mid": "196 19% 55%",
        "--critical-main": "348 81% 47%",
        "--critical-mid": "350 89% 60%",
        "--critical-light": "353 96% 90%",
        "--critical-background": "356 100% 97%",
        "--background": "0 0% 100%",
        "--foreground": "197 45% 14%",
        "--card": "0 0% 100%",
        "--card-foreground": "224 71.4% 4.1%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "224 71.4% 4.1%",
        "--primary": "193 86% 33%",
        "--primary-foreground": "210 20% 98%",
        "--secondary": "194 16% 43%",
        "--secondary-foreground": "0 0% 100%",
        "--muted": "220 14.3% 95.9%",
        "--muted-foreground": "var(--subtext)",
        "--accent": "191 44% 95%",
        "--accent-foreground": "199 21% 40%",
        "--destructive": "var(--critical-main)",
        "--destructive-foreground": "210 20% 98%",
        "--border": "220 13% 91%",
        "--input": "220 13% 91%",
        "--ring": "var(--foreground)",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },

  // 2. Extend the Tailwind theme with "themable" utilities
  {
    darkMode: ["class"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        spacing: {
          "level-0": "0px",
          "level-1": "theme('spacing.1')",
          "level-2": "theme('spacing.2')",
          "level-3": "theme('spacing.3')",
          "level-4": "theme('spacing.4')",
          "level-5": "theme('spacing.6')",
          "level-6": "theme('spacing.8')",
          "level-7": "theme('spacing.12')",
          "level-8": "theme('spacing.16')",
          "level-9": "theme('spacing.20')",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
