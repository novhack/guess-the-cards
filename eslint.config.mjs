import vue_eslint from 'eslint-plugin-vue';
import ts_eslint from '@vue/eslint-config-typescript';

export default [
  ...vue_eslint.configs['flat/essential'],
  ...ts_eslint(),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': "off",
    }
  },
];
