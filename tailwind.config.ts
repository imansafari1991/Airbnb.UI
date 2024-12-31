import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray:"var(--gray)",
        softGray:"var(--softGray)",
        hoverGray:"var(--hoverGray)",
        softBlack:"var(--softBlack)",
        secondSoftGray:"var(--secondSoftGray)",
      },
    },
  },

  plugins: [
    (api: PluginAPI) => {
      const { addUtilities } = api;
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
} satisfies Config;
