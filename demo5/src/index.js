import {a} from './a' // 直接引入
const b = import('./b') // 动态引入，按需加载

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(Promise.resolve('test promise'))
}

hi()