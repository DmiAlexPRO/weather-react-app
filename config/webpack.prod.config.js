const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');

const { devServerConfig } = require('./dev-server-config.json');

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
    entry: `${SRC_PATH}/index.tsx`,
    resolve: {
        modules: [SRC_PATH, 'node_modules'],
        extensions: ['.tsx', '.ts', '.js']
    },
    // devtool: 'source-map',
    output: {
        filename:'[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude:  /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true }
                }
            },
            /*
            Вебпак будет применять их в обратном порядке.
            Сначала он использует css-loader для импорта './styles.css',
            затем style-loader для внедрения стилей в DOM.
            */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../node_modules'),
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader'
                    },
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                type: 'asset'
            },
            {
                test: /\.(ico|jpe?g|png|gif|webp|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new CssMinimizerPlugin()
    ],
    optimization:{
        minimize: true,
        nodeEnv: 'production',
        removeAvailableModules: true,
        mergeDuplicateChunks: true,
        mangleWasmImports: true,
        removeEmptyChunks: true,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ie8: false,
                    safari10: false,
                    keep_classnames: true
                }
            })
        ]
    },
    mode: 'development',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, '../public')
            },
            {
                directory: path.join(__dirname, '../dist')
            }
        ],
        compress: true,
        port: devServerConfig.port,
        // proxy: devServerConfig.proxy,
        open: devServerConfig.open,
        historyApiFallback: true
    }
}