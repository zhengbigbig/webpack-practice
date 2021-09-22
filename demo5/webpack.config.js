const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
    mode: 'production',
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.jsx','.ts','.tsx'] // 不加.jsx就不会检查jsx文件
        })
    ],
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
            }
        ]
    }
}