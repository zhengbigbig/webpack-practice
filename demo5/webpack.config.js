const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.jsx', '.ts', '.tsx'] // 不加.jsx就不会检查jsx文件
        })
    ],
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'icss',
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                @import "@/scss-vars.scss";
                            `,
                            sassOptions: {
                                includePaths: [__dirname]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'icss',
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            additionalData: `
                                @import "@/less-vars.scss";
                            `,
                            sassOptions: {
                                includePaths: [__dirname]
                            }
                        }
                    },
                ]
            }
        ]
    }
}