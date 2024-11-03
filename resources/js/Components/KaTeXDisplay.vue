<template>
    <div v-html="formattedEquation"></div>
  </template>

  <script>
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  export default {
    props: {
      equation: {
        type: String,
        required: true
      }
    },
    computed: {
      formattedEquation() {
        // KaTeXで数式をレンダリングしてHTML形式の文字列に変換します
        return katex.renderToString(this.equation, { throwOnError: false });
      }
    }
  };
  </script>

  <style scoped>
  /* 必要に応じてスタイルを追加 */
  </style>
