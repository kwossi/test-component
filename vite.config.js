import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.js", // Entry point for your library
      name: "MyComponentLibrary", // Global name for UMD build
      formats: ["es", "cjs"], // Specify which formats to generate
      fileName: (format) => `my-component-library.${format}.js`, // Output file names
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
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
});
