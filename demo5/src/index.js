import {a} from './a' // 直接引入
const b = import('./b') // 动态引入，按需加载
import {JsxDemo} from './jsx-demo.jsx'

console.log(JsxDemo)

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(Promise.resolve('test promise'))
}

hi()