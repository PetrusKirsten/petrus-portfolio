import type { Config } from "tailwindcss";

const config: Config = {

  darkMode: ["class"],

  content: ["./src/**/*.{ts,tsx,mdx}"],

  theme: {

    extend: {

      colors: {
        bg        : "var(--bg)",
        fg        : "var(--fg)",
        muted     : "var(--muted)",
        primary   : "var(--primary)",
        secondary : "var(--secondary)",
        border    : "var(--border)",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },

      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
