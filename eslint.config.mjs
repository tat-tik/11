import globals from 'globals';
import js from '@eslint/js';

export default [
js.configs.recommended,
{
files: ['/*.{js,mjs,cjs}'],
ignores: ['node_modules/', 'dist/', 'build/'],
languageOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
globals: {
...globals.node
}
},
rules: {
// Строгость
strict: ['error', 'global'], // Требует "use strict"
'no-unused-vars': 'off', // Запрещает неиспользуемые переменные
'no-console': 'warn', // Предупреждение на console.log
eqeqeq: 'error', // Требует === вместо ==
curly: 'error', // Требует фигурные скобки для блоков
'no-var': 'error', // Запрещает var
'prefer-const': 'error', // Требует const для неизменяемых переменных

  // Форматирование
  quotes: ['error', 'single', { avoidEscape: true }], // Одинарные кавычки
  semi: ['error', 'always'], // Требует точку с запятой
  indent: ['error', 2], // Отступы в 2 пробела
  'linebreak-style': ['error', 'unix'], // Unix-стиль переносов (\n)
  'eol-last': ['error', 'always'], // Перенос строки в конце файла
  'no-trailing-spaces': 'error', // Запрещает пробелы в конце строк
  'object-curly-spacing': ['error', 'always'], // Пробелы внутри { key: value }
  'array-bracket-spacing': ['error', 'never'], // Без пробелов в [1, 2]
  'space-before-function-paren': ['error', 'never'], // Без пробела перед ()
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], // Не более 1 пустой строки
  'max-len': ['error', { code: 120 }] // Максимальная длина строки 120 символов
}
}
];