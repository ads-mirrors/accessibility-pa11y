'use strict';

const rules = require('pa11y-lint-config/eslint/es2017');

module.exports = {
	...rules,
	parserOptions: {
		...(rules.parserOptions ?? {}),
		ecmaVersion: 2020
	},
};
