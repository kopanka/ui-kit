const react = require('@vitejs/plugin-react');
const svgr = require('vite-plugin-svgr');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
	async viteFinal(config) {
		config.plugins = config.plugins.filter(plugin => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')));

		config.plugins.push(
			react({
				exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
				babel: {
					plugins: ['babel-plugin-styled-components'],
				},
			}),
		);
		config.plugins.push(svgr());

		return config;
	},

}
