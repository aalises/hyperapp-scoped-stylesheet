import babel from 'rollup-plugin-babel';

export default {
  input: `hyperapp.dev.js`,
  output: [
		{ file: 'dist/hyperapp-scoped-stylesheet.umd.js', name: 'hyperappStylesheet', format: 'umd' },
		{ file: 'dist/hyperapp-scoped-stylesheet.es.js', format: 'es' },
    { file: 'hyperapp.js', format: 'es' }
  ],
  plugins: [
    babel({
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
        "external-helpers"
      ]
    })
  ]
  
}
