module.exports = {
    extends: ['react-app'],
    rules: {
        'react/jsx-uses-react': [2],
        // 提示要在 JSX 文件里手动引入 React
        'react/react-in-jsx-scope': [2],
        'no-console': [0]
    },
    // 单独定义TS规则
    overrides: [{
        files: ['*.ts', '*.tsx'],
        parserOptions: {
            project: './tsconfig.json', // 告诉ts去哪里检查等配置文件
        },
        extends: ['airbnb-typescript'], // 继承ts规则
        rules: {
            // 自定义规则
            '@typescript-eslint/object-curly-spacing': [0], // 0代表忽略，1代表警告，2代表报错
            'import/prefer-default-export': [0],
            'no-console': [0],
            'import/extensions': [0],
            '@typescript-eslint/indent': [0],
            'react/jsx-indent': [0],
            'eol-last': [0],
        }
    }]
}
