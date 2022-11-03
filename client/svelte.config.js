import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			assets: "dist/assets",
			pages: "dist/pages",
			fallback: "200.html"
		}),
		prerender: {
			enabled: true,
			crawl: true
		}
	}
};

export default config;
