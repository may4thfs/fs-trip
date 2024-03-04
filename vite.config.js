import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// 功能：自动导入 Vue 组件，避免了在每个文件中手动导入组件的麻烦。
		Components({
			// 指定需要自动导入的组件库
			resolvers: [VantResolver()]
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
})
