import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const pathSrc = path.resolve(__dirname, "./src");
//import postcss from "@vituum/vite-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
export default defineConfig(({ mode }) => {
  if (mode === "build-library") {
    return {
      build: {
        lib: {
          entry: "./src/index.js", // Entry point for the library
          name: "MyComponentLibrary",
          formats: ["es", "cjs", "umd"],
          fileName: (format) => `my-component-library.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
      cssCodeSplit: false,
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
            additionalData: `@use "${pathSrc}/library/colors.scss";`,
            includePaths: ["node_modules"],
          },
        },
        postcss: {
          plugins: [
            postcssPresetEnv({
              stage: 0, // Enables CSS custom properties processing
              features: {
                "custom-properties": true,
              },
            }),
          ],
        },
      },
    };
  }

  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    build: {
      outDir: "docs-dist", // Output folder for the documentation site
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  };
});
