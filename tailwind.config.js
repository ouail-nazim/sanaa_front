module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html'],
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
