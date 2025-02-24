// vitest.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    coverage: {
      provider: "v8",
      exclude: [
        "eslint.config.js",
        "vite.config.ts",
        "vitest.config.ts",
        "dist/**",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/application/services",
        "src/hooks",
        "src/ui/layouts/",
        "src/ui/styles/",
        "src/utils/",
        "src/models",
        "src/ui/organisms/",
        "src/ui/molecules/",
      ],
    },
  },
});
