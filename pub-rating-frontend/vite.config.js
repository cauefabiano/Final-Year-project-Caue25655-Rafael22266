import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Local development
  },
  build: {
    outDir: "build", // Ensure this is where React outputs files
  },
  base: "/", // Ensure correct base URL
});
