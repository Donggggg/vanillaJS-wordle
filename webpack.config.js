import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: "./src/javascript/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
  ],
  devServer: {
    static: {
      directory: path.join(dirname, "dist"),
    },
    port: 3000,
    hot: true,
  },
};

export default config;
