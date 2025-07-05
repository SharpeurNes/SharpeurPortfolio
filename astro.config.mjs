// @ts-check
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	vite: {
		plugins: [ mkcert() ]
	},
});
