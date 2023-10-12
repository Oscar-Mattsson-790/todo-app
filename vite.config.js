import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scss from "@vitejs/plugin-scss";

export default defineConfig({
  plugins: [react(), scss()],
  base: "/todo-app",
});
