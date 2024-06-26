module.exports = {
	printWidth: 80,
	useTabs: true,
	tabWidth: 1,
	singleQuote: true,
	bracketSpacing: true,
	trailingComma: 'all',
	semi: true,
	sortingMethod: 'lineLength',
	plugins: ['./node_modules/prettier-plugin-sort-imports/dist/index.js'],
	importTypeOrder: ['all'],
};
