// Dependencias.
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

// Configuraciones de webpack.
module.exports = {
  // Configuración de entrada.
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },

    shared: ["react", "react-dom"],
  },

  // Configuración de salida.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },

  // Configuración de optimización.
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  // Configuración de impacto.
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js|jsx");
    },
  },

  // Extensiones de archivos.
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Configuración de modulos.
  module: {
    rules: [
      // Configuración de archivos JS & JSX.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // Configuración de archivos HTML.
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },

      // Configuración de archivos CSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // Configuración de Assets (PNG, JPG, GIF ).
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },

  // Configuración de plugins.
  plugins: [
    // Copy Webpack Plugin
    new copyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images",
          to: "assets",
        },
      ],
    }),

    // HTML plugin
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./src/assets/images/favicon.png",
    }),

    // CSS plugin
    new miniCSSExtractPlugin(),
  ],

  // Servidor.
  devServer: {
    // Puerto.
    port: 8080,

    // Información del navegador para el cliente.
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: true,
      },

      // Mostrar progreso de compilación.
      progress: true,

      // Reconeccion automática.
      reconnect: true,
    },

    // Recarga rapida.
    hot: true,
  },
};
