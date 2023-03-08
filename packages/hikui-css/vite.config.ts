import { defineConfig } from "vite";
import { resolve } from "path";
import dts, { PluginOptions } from "vite-plugin-dts";

const dtsOptions: PluginOptions = {
  insertTypesEntry: true,
};

export default defineConfig({
  // eslint-disable-next-line
  // @ts-ignore
  plugins: [dts(dtsOptions)],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "hikui-ui-css",
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
});
