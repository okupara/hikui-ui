import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "@hikui-ui/util",
      filename: "hikui-ui-util",
      formats: ["es", "cjs"],
    },
  },
});
