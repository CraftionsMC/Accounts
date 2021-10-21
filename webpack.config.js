/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./client/src/index.jsx"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./client/build"),
        filename: "bundle.js",
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "./client/public", to: "."}
            ]
        }),
        new HtmlWebpackPlugin({
            appMountId: 'app',
            filename: 'index.html',
            template: './client/src/index.html',
            title: "Craftions Accounts",
        }),
    ],
    devServer: {
        hot: true,
    },
};