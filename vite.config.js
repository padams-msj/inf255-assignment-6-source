import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// The Vue plugin teaches Vite how to read .vue files.
export default defineConfig({
	plugins: [vue()],
});
