import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'

export default {
  input: `hyperapp.dev.js`,
  output: [
		{ file: 'dist/hyperapp-scoped-stylesheet.umd.js', name: 'hyperappStylesheet', format: 'umd' },
		{ file: 'dist/hyperapp-scoped-stylesheet.es.js', format: 'es' },
    { file: 'hyperapp.js', format: 'es' }
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      "presets": [
        [
          "env",
          {
            "modules": false
          }
        ]
      ],
      "plugins": [
        "external-helpers",
      ]
    }),
    uglify()
  ]
  
}
