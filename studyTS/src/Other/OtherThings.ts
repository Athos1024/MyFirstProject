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