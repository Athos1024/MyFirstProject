//https://github.com/youlookwhat/DesignPattern
//https://www.yiibai.com/design_pattern/abstract_factory_pattern.html
//https://www.runoob.com/design-pattern/builder-pattern.html
//https://blog.csdn.net/LoveLion/article/details/17517213?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161408239716780255244847%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=161408239716780255244847&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~hot_rank-2-17517213.first_rank_v2_pc_rank_v29&utm_term=%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F


//传入类名
class A {
}
function fun(cls: new () => A) {
}
fun(A)

//extend 与 implement 区别
/**
 * extend是继承，只能继承一个类
 * implement是实现多个接口
 * class A extends B implements C,D,E   
 */

/**
 * interface 和 abstract
 * interface 没有访问修饰符，没有函数体,用implements。interface 就是特效的abstract 接口继承接口用 extends
 * abstract 可以抽象成员和方法，抽象方法没有函数体，子类必须实现
 */

//ts删除可以用 null
//删除对象属性可以用delete

//js.map是用来断点ts脚本

//ctrl + i 补全

/**
 * js继承 就是通关 for in
 *for(let key in clsA){
    let clsB[key] = clsA[key];
 }
 */


// 1、./是当前目录
// 2、../是父级目录
// 3、/是根目录
//"./**/*"


//export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。




//let a = arr.reduce((sum, item) => {return sum = sum + item}, "")
//let a = arr.reduce((sum, item) => (sum = sum + item), "")


//找到是否存在这个key
// let arr :{[key:string]:number} = {};
// arr[5] = 10;
// arr[1] = 20;
//Object.prototype.hasOwnProperty.call(arr,5) 


//new Set();

//arguments 方法的参数


//node.js 可以在控制台输入 文件路径 node 文件名 运行
//node.js 关闭可以ctrl + c


//console 的用法
// console.log('我的%s已经%d岁', '猫', 2)
// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象

//console.clear() 会清除控制台（其行为可能取决于所使用的控制台）。

// console.count() 是一个便利的方法。

//console.trace()打印堆栈

// 可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间：

// console.log('\x1b[33m%s\x1b[0m', '你好')为输出着色


// 可以使用 npm install chalk 进行安装，然后就可以使用它：
// const chalk = require('chalk')
// console.log(chalk.yellow('你好'))
// import chalk = require('chalk')
// console.log(chalk.yellow('你好'))

//导入文件
// import chalk, {Chalk} from "chalk"


//true和false转 0 1
//~~true ~~false 也可以过滤小数 ~~1.00001

/**初始化脚本 */
// function loadLib(url) {
//    var script = document.createElement("script");
//    script.async = false;
//    script.src = url;
//    document.body.appendChild(script);
// }