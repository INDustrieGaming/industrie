const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
		plugin(function({addBase, config}) {
			addBase({
				'h1': {
          fontSize: config('theme.fontSize.3xl'), 
          marginTop: config('theme.spacing.6'),
          marginBottom: config('theme.spacing.6'),
          fontWeight: config('theme.fontWeight.bold')
				},
				'h2': {
          fontSize: config('theme.fontSize.2xl'), 
          marginTop: config('theme.spacing.4'),
          marginBottom: config('theme.spacing.4'),
          fontWeight: config('theme.fontWeight.bold')
				},
				'h3': {
          fontSize: config('theme.fontSize.1xl'), 
          marginTop: config('theme.spacing.3'),
          marginBottom: config('theme.spacing.3'),
          fontWeight: config('theme.fontWeight.bold')
				},
				'h4': {
          fontSize: config('theme.fontSize.lg'), 
          marginTop: config('theme.spacing.2'),
          marginBottom: config('theme.spacing.2'),
          fontWeight: config('theme.fontWeight.bold')
				}
			})
		})
	],
}

