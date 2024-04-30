import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        port: 5173,
        strictPort: true,
    },
    server: {
        port: 5173,
        strictPort: true,
        origin: "http://localhost:5173",
        host: true,
    },

    build: {
        rollupOptions: {
            external: ["./src/dev/**"],
        },
    },
});
