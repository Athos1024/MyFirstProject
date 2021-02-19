//https://github.com/youlookwhat/DesignPattern
//https://www.yiibai.com/design_pattern/abstract_factory_pattern.html
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
 * interface 没有访问修饰符，没有函数体,用implements。interface 就是特效的abstract
 * abstract 可以抽象成员和方法，抽象方法没有函数体，子类必须实现
 */

//ts删除可以用 null
//删除对象属性可以用delete

//单列模式
namespace singleton {
    //优点共享资源
    //缺点无法继承
    class Toast {
        //静态私有的成员
        private static instance: Toast;
        //构造函数私有
        private constructor() { };
        //提供一个静态访问方法
        public static getInstance(): Toast {
            if (!this.instance) {
                Toast.instance = new Toast();
            }
            return Toast.instance;
        }
    }

}


//=============================================//
/**
优点： 1、观察者和被观察者是抽象耦合的。 2、建立一套触发机制。
缺点： 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
 */
//监视者模式
namespace observer {

    //主题接口，所有主题必须实现此接口
    interface Subject {

        //注册一个观察者
        registerObserver(o: Observer): void;

        //移除一个观察者
        removeObservr(o: Observer): void;

        //通知所有的观察者
        notifyObserver(): void;
    }

    //所有观察者接口
    interface Observer {
        update(msg: string): void;
    }

    class ObjectFor3D implements Subject {

        private observerList: Observer[] = [];

        private msg: string;

        public registerObserver(o: Observer): void {
            this.observerList.push(o);
        }

        public removeObservr(o: Observer): void {
            let index = this.observerList.indexOf(o);
            if (index > -1) {
                this.observerList.splice(index, 1);
            }
        }

        public notifyObserver(): void {
            for (let i = 0; i < this.observerList.length; i++) {
                const element = this.observerList[i];
                element.update(this.msg);
            }
        }

        //设置更新消息
        public setMsg(msg: string): void {
            this.msg = msg;
            this.notifyObserver();
        }
    }

    class Observer1 implements Observer {

        private Subject: Subject;

        constructor(Subject: Subject) {
            this.Subject = Subject;
            this.Subject.registerObserver(this);
        }

        public update(msg: string): void {
            console.log('Observer1msg ==============', msg);
        }
    }

    class Observer2 implements Observer {

        private Subject: Subject;

        constructor(Subject: Subject) {
            this.Subject = Subject;
            this.Subject.registerObserver(this);
        }

        public update(msg: string): void {
            console.log('Observer2 msg ==============', msg);
        }
    }

    let o: ObjectFor3D = new ObjectFor3D();

    let ob1: Observer1 = new Observer1(o);
    let ob2: Observer2 = new Observer2(o);

    o.setMsg("监视者模式,传入消息")
}


//==================================//

//工厂模式
namespace Factory {

    // 1、静态工厂模式

    // 这个最常见了，项目中的辅助类，TextUtil.isEmpty等，类+静态方法。下面开始详细介绍：略。

    abstract class RouJiaMo {
        protected _name: string;
        //准备工作
        public prepare(): void {
            console.log('揉面-剁肉-完成准备工作');
        }
        //使用你们的专用袋-包装
        public pack(): void {
            console.log('肉夹馍-专用袋-包装');
        }
        //秘制设备-烘烤2分钟
        public fire(): void {
            console.log('若夹馍·专用设备-烘烤');
        }
    }

    //酸味肉夹馍
    class SuanRouJiaMo extends RouJiaMo {
        constructor() {
            super();
            this._name = "酸味肉夹馍";
        }
    }

    //辣味肉夹馍
    class LaRouJiaMo extends RouJiaMo {
        constructor() {
            super();
            this._name = "辣味肉夹馍";
        }
    }

    //简单工厂
    namespace Factory.a {
        class SimpleRouJiaMoFactory {
            public createRouJiaMo(type: string): RouJiaMo {
                let roujiamo: RouJiaMo = null;
                if (type == "Suan") {
                    roujiamo = new SuanRouJiaMo();
                } else if (type == "La") {
                    roujiamo = new LaRouJiaMo();
                }
                return roujiamo;
            }
        }

        class RoujiamoStore {
            private factory: SimpleRouJiaMoFactory
            constructor(factory: SimpleRouJiaMoFactory) {
                this.factory = factory;
            }

            //根据传入类型卖不同的肉夹馍
            public sellRouJiaMo(type: string): RouJiaMo {
                let roujiamo: RouJiaMo = this.factory.createRouJiaMo(type);
                roujiamo.prepare();
                roujiamo.fire();
                roujiamo.pack()
                return roujiamo
            }
        }
    }

    //工厂方法
    namespace Factory.b {

        abstract class RoujiaMoStore {

            abstract createRouJiaMo(type: string)

            //根据传入类型卖不同的肉夹馍
            public sellRouJiaMo(type: string): RouJiaMo {
                let roujiamo: RouJiaMo = this.createRouJiaMo(type);
                roujiamo.prepare();
                roujiamo.fire();
                roujiamo.pack()
                return roujiamo
            }
        }

        class XianRouJiaMoStore extends RoujiaMoStore {
            createRouJiaMo(type: string) {
                let roujiamo: RouJiaMo = null;
                if (type == "Suan") {
                    roujiamo = new SuanRouJiaMo();
                } else if (type == "La") {
                    roujiamo = new LaRouJiaMo();
                }
                return roujiamo;
            }
        }
    }

    //抽象工厂模式
    namespace Factory.c {
        interface Shape {
            draw(): void;
        }

        class Rect implements Shape{
            draw(){
                console.log('draw Rect');
            }
        }

        class Square implements Shape{
            draw(){
                console.log('draw Square');
            }
        }

        interface Color{
            fill():void;
        }

        class Red implements Color{
            fill(){
                console.log('color red');
            }
        }

        class Greed implements Color {
            fill(){
                console.log('color greed');
            }
        }


        abstract class AbstractFactory{
            abstract getColor(color:string):Color;
            abstract getDraw(shap:string):Shape;
        }
        
        class shapeFactory extends AbstractFactory{
            getColor(color:string):Color{
                return null;
            }

            getDraw(shap:string):Shape{
                if(shap == null){
                    return null;
                }

                if(shap == "rect"){
                    return new Rect();
                }else if(shap == "square"){
                    return new Square();
                }
            }
        }

        class ColorFactory extends AbstractFactory {
            getColor(color:string):Color{
                if(color == null){
                    return null;
                }

                if(color == "red"){
                    return new Red();
                }else if(color == "greed"){
                    return new Greed();
                }
            }

            getDraw(shap:string):Shape{
                return null;
            }
        }


        class FactoryProducer{
            public static getFactory(choice:string):AbstractFactory{
                if(choice == "SHAPE"){
                    return new shapeFactory();
                }else if(choice == "COLOR"){
                    return new ColorFactory();
                }
                return null;
            }
        }

        let f1 = FactoryProducer.getFactory("SHAPE");
        let shap:Shape = f1.getDraw("rect");
        shap.draw();
    }

}

