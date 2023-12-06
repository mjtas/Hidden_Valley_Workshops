// rollup.config.js
import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js', // Entry point of your application
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'iife', // Output format (immediately-invoked function expression)
  },
  external: ['axios'],
  plugins: [
    vue(), // Plugin to handle .vue files
    commonjs(), // Plugin to convert CommonJS modules to ES6
    resolve(), // Plugin to resolve node_modules dependencies
  ],
};
