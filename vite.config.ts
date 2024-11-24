import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      assets: path.resolve(__dirname, "./src/assets"),
      css: path.resolve(__dirname, "./src/assets/css"),
      fonts: path.resolve(__dirname, "./src/assets/css/fonts"),
      images: path.resolve(__dirname, "./src/assets/images"),
      "3d": path.resolve(__dirname, "./src/assets/3d"),
      lib: path.resolve(__dirname, "./src/lib"),
    },
  },
});
