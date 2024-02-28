import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        presets: [
          [
            "@babel/preset-react",
            { runtime: "automatic", importSource: "@emotion/react" },
          ],
        ],
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  base: "https://kimpra2989.github.io/wanted-pre-onboarding-frontend-challenge-19/"
});