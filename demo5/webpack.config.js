module.exports = {
    mode: 'production',
    module: {
        rules: [
            // 使用webpack调用babel-loader去打包
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, // 排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // presets预先定义的规则
                    }
                }
            }
        ]
    }
}