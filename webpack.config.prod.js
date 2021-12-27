const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// images
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    index: './src/index.html',
    bike: './src/bike_ride.html',
    cipher: './src/caesar-cipher.html',
    enviro: './src/environment.html',
    mac: './src/macintosh.html',
    xbox: './src/xbox.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/images/favicon.ico',
      chunks: ['index', 'main'],
      filename: 'index.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/bike_ride.html',
      favicon: './src/images/favicon.ico',
      chunks: ['bike', 'main'],
      filename: 'bike_ride.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/caesar-cipher.html',
      favicon: './src/images/favicon.ico',
      chunks: ['cipher', 'main'],
      filename: 'caesar-cipher.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/environment.html',
      favicon: './src/images/favicon.ico',
      chunks: ['enviro', 'main'],
      filename: 'environment.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/macintosh.html',
      favicon: './src/images/favicon.ico',
      chunks: ['mac', 'main'],
      filename: 'macintosh.html'
      // filename: '[contenthash:6].html'
    }),
    new HtmlWebpackPlugin({
      template: './src/xbox.html',
      favicon: './src/images/favicon.ico',
      chunks: ['xbox', 'main'],
      filename: 'xbox.html'
      // filename: '[contenthash:6].html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:6].css',
      // chunkFilename: 'css/[chunkhash].css',
    }),
  ],
  output: {
    filename: './bundles/[name].js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[base]',
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          {
            loader: "css-loader",
            options: {
              url: {
                // https://github.com/webpack-contrib/css-loader/issues/1342
                // skip any data URLs of type image/svg+xml
                filter: (url) => !(url.startsWith("data:image/svg+xml"))
              }
            }
          }, 'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              // process anchors to images (in bike_ride.html)
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
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // customize default plugin options
                      inlineStyles: {
                        onlyMatchedOnce: false,
                      },
            
                      // or disable plugins
                      removeDoctype: false,
                    },
                  },
                }
              ],
            ],
          },
        },
      }),
    ],
  },
};