import {a} from './a' // 直接引入
import {JsxDemo} from './jsx-demo.jsx'
const b = import('./b') // 动态引入，按需加载


console.log(JsxDemo)

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(Promise.resolve('test promise'))
}

hi()