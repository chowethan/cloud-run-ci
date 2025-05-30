import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: { ...globals.node },
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: { ecmaFeatures: { impliedStrict: true } },
		},

		rules: { 'no-unused-vars': 'warn', 'sort-imports': ['warn'] },
	},
];
