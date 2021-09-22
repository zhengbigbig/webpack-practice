const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssLoaders = (...loaders) => [
    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            modules: {
                compileType: 'icss',
            }
        }
    },
    ...loaders
]

module.exports = {
    mode,
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.jsx', '.ts', '.tsx'] // 不加.jsx就不会检查jsx文件
        }),
        mode === 'production' && new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin()
    ].filter(Boolean),
    output: {
        filename: '[name].[contenthash].js',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            // 使用webpack调用babel-loader去打包
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/, // 排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', {runtime: 'classic'}], // classic使用经典版
                            ['@babel/preset-typescript']
                        ]

                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders({
                    loader: 'sass-loader',
                    options: {
                        additionalData: `
                                @import "@/scss-vars.scss";
                            `,
                        sassOptions: {
                            includePaths: [__dirname]
                        }
                    }
                })
            },
            {
                test: /\.less$/i,
                use: cssLoaders({
                    loader: 'less-loader',
                    options: {
                        additionalData: `
                                @import "@/less-vars.less";
                            `,
                    }
                })
            },
            {
                test: /\.styl(us)?$/i,
                use: cssLoaders({
                    loader: 'stylus-loader',
                    options: {
                        stylusOptions: {
                            import: [path.resolve(__dirname, 'src/stylus-vars.styl')]
                        }
                    }
                })
            }
        ]
    }
}