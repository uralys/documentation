import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: false,
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'none',
          arrowParens: 'avoid'
        }
      ]
    }
  }
);
