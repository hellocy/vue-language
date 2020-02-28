module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    globals: {
        ZT_INTERFACE: true,
        VUE: true
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        "space-before-function-paren": 0,
        "standard/array-bracket-even-spacing": "off", // 禁止或强制在括号内使用空格
        "standard/computed-property-even-spacing": "off", // 禁止或强制在计算属性中使用空格
        "standard/object-curly-even-spacing": "off", // 强制在花括号中使用一致的空格
        'indent': ['error', 4],
        'no-var': 2,
        'no-alert': 2, // 禁用 alert、confirm 和 prompt
        'no-undef': 2, // 禁用未声明的变量
        'camelcase': 2,// 强制驼峰法命名
        'curly': [2, 'all'], // 必须使用if(){} 中的{}
        'no-trailing-spaces': 0,
        'quotes': ['error', 'single'],
        "extends": "standard",
        'no-console': 0,
        'func-call-spacing': ['error', 'never'], // 调用函数不允许有空格
        'keyword-spacing': 0, // 强制在关键字前后使用一致的空格 (前后腰需要)
        'no-unused-vars': ['error', { 'args': 'none' }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
        "space-before-function-paren": "off", // 函数定义时括号前面不要有空格
    }
}
