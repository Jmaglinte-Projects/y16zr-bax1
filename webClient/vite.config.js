import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [react({
		include: "**/*.jsx"
	})],
	resolve: {
		alias: {
		  '@': path.resolve(__dirname, './src'),
		  'Assets': path.resolve(__dirname, './src/assets'),
		  'Components': path.resolve(__dirname, './src/components'),
		  'Hooks': path.resolve(__dirname, './src/hooks'),
		  'Routes': path.resolve(__dirname, './src/routes'),
		  'Views': path.resolve(__dirname, './src/views'),
		},
	},
})
