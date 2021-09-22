import {a} from './a' // 直接引入
import {JsxDemo} from './jsx-demo.jsx'
import {x} from './ts-demo.ts'

const b = import('./b') // 动态引入，按需加载


console.log(JsxDemo);
console.log(x)

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(Promise.resolve('test promise'))
}

hi()