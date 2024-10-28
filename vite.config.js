import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => {
  if (command === "build-library") {
    return {
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
          },
        },
      },
      build: {
        lib: {
          entry: "./src/index.js", // Entry point for the library
          name: "MyComponentLibrary",
          formats: ["es", "cjs"],
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
      plugins: [react()],
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
