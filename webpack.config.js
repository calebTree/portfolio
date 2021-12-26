const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    index: './src/index.html',
    bike: './src/bike_ride.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // inject: true,
      chunks: ['index', 'main'],
      filename: 'index.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/bike_ride.html',
      // inject: true,
      chunks: ['bike', 'main'],
      filename: 'bike_ride.html'
      // filename: '[contenthash:6].html'
    }),
  ],
  output: {
    filename: './bundles/[name].js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[base]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                // Tag name
                tag: "a",
                // Attribute name
                attribute: "href",
                // Type of processing, can be `src` or `scrset`
                type: "src",
              },
            ],
            urlFilter: (attribute, value, resourcePath) => {
              // The `attribute` argument contains a name of the HTML attribute.
              // The `value` argument contains a value of the HTML attribute.
              // The `resourcePath` argument contains a path to the loaded HTML file.
              if (/\.js$/.test(value) || /\.css$/.test(value) || /\.html$/.test(value) || /\/$/.test(value)) {
                return false;
              }
              return true;
            },
          },
        },
      },
    ],
  },
};
