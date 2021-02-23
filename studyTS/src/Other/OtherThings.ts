//https://github.com/youlookwhat/DesignPattern
//https://www.yiibai.com/design_pattern/abstract_factory_pattern.html
//https://www.runoob.com/design-pattern/builder-pattern.html

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


