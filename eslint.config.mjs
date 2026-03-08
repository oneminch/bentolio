// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/html-closing-bracket-newline': ['error', {
        multiline: 'never'
      }],
      'vue/max-attributes-per-line': ['warn', {
        multiline: {
          max: 2
        }
      }]
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      'indent': 'off',
      '@stylistic/indent': 'off',
      'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }]
    }
  }
);
