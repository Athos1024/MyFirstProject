declare class A {
}
declare function fun(cls: new () => A): void;
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
/**
 * js继承 就是通关 for in
 *for(let key in clsA){
    let clsB[key] = clsA[key];
 }
 */
//# sourceMappingURL=OtherThings.d.ts.map