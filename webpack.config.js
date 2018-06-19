const path = require('path')

module.exports = env => {
  const isDevelopment = env.NODE_ENV === 'development'
  const exclude = [ /node_modules/ ]
  if (!isDevelopment) exclude.push(/\.dev\.js$/)
  const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'public/build/javascripts'),
      filename: 'app.js',
      publicPath: '/build/javascripts'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }

  if (isDevelopment) config.devtool = 'inline-source-map'
  return config
}
