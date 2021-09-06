const { fontFamily } = require('tailwindcss/defaultTheme');
const config = {
	// mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors:{
				'primary': '#232E33',
				'secondary': '#CC3333'
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			},
			zIndex: {
				'negative': -1
			}
		},
	},
	plugins: [],
};

module.exports = config;
