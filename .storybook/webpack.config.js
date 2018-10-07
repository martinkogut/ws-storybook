const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(jpe?g|jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loaders: [
          'url-loader?limit=10000'
        ],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
