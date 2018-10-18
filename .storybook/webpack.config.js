const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]'
        ]
      }
    ]
  }
};
