const path = require('path')

module.exports = env => {
  const isDevelopment = env.NODE_ENV === 'development'
  const exclude = [ /node_modules/ ]
  if (!isDevelopment) exclude.push(/\.dev\.js$/)
  const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'public/build/javascripts'),
      filename: 'app.bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/build/javascripts/'
    },
    module: {
      rules: [
        {
          test: /\.modernizrrc$/,
          use: [
            {
              loader: 'modernizr-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
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
        },
        {
          test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: [
            {
              loader: 'base64-inline-loader',
              options: {
                limit: '1000',
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }

  if (isDevelopment) config.devtool = 'inline-source-map'
  return config
}
