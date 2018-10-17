module.exports = {
  output: {
    library: 'MathquillComponent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  target: 'node',
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /mathquill\.css$/,
        loader: 'string-replace-loader',
        options: {
          search: '@font-face {(.|\n)+?}',
          replace:
            '@font-face {\n' +
            '  /* Heavy fonts have been removed */\n' +
            '  font-family: Symbola;\n' +
            // '  src: url("font/Symbola.woff2") format("woff2"), url("font/Symbola.woff") format("woff");\n' +
            // '  src: url("font/Symbola.ttf") format("truetype");\n',
            '}',
          flags: 'g',
        },
      },
    ],
  },
}
