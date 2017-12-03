const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "public/assets"),
        filename: "Brighter.js"
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                      "@babel/preset-env",
                      "@babel/preset-react"
                  ]
                }
              }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"Brighter",
            template: "src/index.html"
        })
    ]
};