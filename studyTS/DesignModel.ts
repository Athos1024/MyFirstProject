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
 * interface 没有访问修饰符，没有函数体,用implements。interface 就是特效的abstract
 * abstract 可以抽象成员和方法，抽象方法没有函数体，子类必须实现
 */

//ts删除可以用 null
//删除对象属性可以用delete

//js.map是用来断点ts脚本

//ctrl + i 补全


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
/**
优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
 */
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

        class Rect implements Shape {
            draw() {
                console.log('draw Rect');
            }
        }

        class Square implements Shape {
            draw() {
                console.log('draw Square');
            }
        }

        interface Color {
            fill(): void;
        }

        class Red implements Color {
            fill() {
                console.log('color red');
            }
        }

        class Greed implements Color {
            fill() {
                console.log('color greed');
            }
        }


        abstract class AbstractFactory {
            abstract getColor(color: string): Color;
            abstract getDraw(shap: string): Shape;
        }

        class shapeFactory extends AbstractFactory {
            getColor(color: string): Color {
                return null;
            }

            getDraw(shap: string): Shape {
                if (shap == null) {
                    return null;
                }

                if (shap == "rect") {
                    return new Rect();
                } else if (shap == "square") {
                    return new Square();
                }
            }
        }

        class ColorFactory extends AbstractFactory {
            getColor(color: string): Color {
                if (color == null) {
                    return null;
                }

                if (color == "red") {
                    return new Red();
                } else if (color == "greed") {
                    return new Greed();
                }
            }

            getDraw(shap: string): Shape {
                return null;
            }
        }


        class FactoryProducer {
            public static getFactory(choice: string): AbstractFactory {
                if (choice == "SHAPE") {
                    return new shapeFactory();
                } else if (choice == "COLOR") {
                    return new ColorFactory();
                }
                return null;
            }
        }

        let f1 = FactoryProducer.getFactory("SHAPE");
        let shap: Shape = f1.getDraw("rect");
        shap.draw();
    }

}

//=======================================//

/**
优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。
缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。
 */
//策略模式
namespace Strategy {

    //攻击
    interface IAttackBehavior {
        attack(): void;
    }

    //防御
    interface IDefendBehavior {
        defend(): void;
    }

    //显示
    interface IDisplayBehavior {
        display(): void;
    }

    //逃跑
    interface IRunBehavior {
        run(): void;
    }

    class AttackJYSG implements IAttackBehavior {
        attack() {
            console.log('九阳神功');
        }
    }

    class DefendTBS implements IDefendBehavior {
        defend() {
            console.log('贴布衫');
        }
    }

    class DisplayYZ implements IDisplayBehavior {
        display() {
            console.log('样子');
        }
    }

    class RunYWD implements IRunBehavior {
        run() {
            console.log('烟雾弹');
        }
    }

    abstract class Role {
        protected name: string;

        protected defendBehavior: IDefendBehavior;
        protected attackBehavior: IAttackBehavior;
        protected displayBeHavior: IDisplayBehavior;
        protected runBehavior: IRunBehavior;

        public setDefendBehavior(defendBehavior: IDefendBehavior): Role {
            this.defendBehavior = defendBehavior;
            return this;
        }

        public setAttackBehavior(attackBehavior: IAttackBehavior): Role {
            this.attackBehavior = attackBehavior;
            return this;
        }

        public setDisplayBehavior(displayBeHavior: IDisplayBehavior): Role {
            this.displayBeHavior = displayBeHavior;
            return this;
        }

        public setRunBehavior(runBehavior: IRunBehavior): Role {
            this.runBehavior = runBehavior;
            return this;
        }

        public defend(): void {
            this.defendBehavior.defend();
        }

        public attack(): void {
            this.attackBehavior.attack();
        }

        public display(): void {
            this.displayBeHavior.display();
        }

        public run(): void {
            this.runBehavior.run();
        }

    }

    class RoleA extends Role {
        constructor(name: string) {
            super();
            this.name = name;
        }
    }

    let roleA = new RoleA("A");
    roleA.setAttackBehavior(new AttackJYSG())
        .setDefendBehavior(new DefendTBS())
        .setDisplayBehavior(new DisplayYZ())
        .setRunBehavior(new RunYWD());
    roleA.attack();
    roleA.defend();
    roleA.display();
    roleA.run();
}


//**================== */
/**
优点： 1、可以让任何两个没有关联的类一起运行。 2、提高了类的复用。 3、增加了类的透明度。 4、灵活性好。

缺点： 1、过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是
 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。
 因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。 2.由于 JAVA 至多继承一个类，
 所以至多只能适配一个适配者类，而且目标类必须是抽象类。
 */
//适配器模式
namespace Adapter {

    //充电
    class Mobile {
        inputPower(power: IV5Power): void {
            let provideV5Power = power.provideV5Power();
            console.log('我需要5V电压充电' + provideV5Power);
        }
    }

    //提供5V电压的一个接口
    interface IV5Power {
        provideV5Power(): number;
    }

    //家用220V电压
    class V220Power{
        public provideV220Power(){
            console.log('提供一个220V电压');
            return 220;
        }
    }

    //适配器，把220V电压变成5V
    class V5PowerAdapter implements IV5Power{
        private V220Power:V220Power;
        constructor(V220Power:V220Power){
            this.V220Power = V220Power;
        }
        
        provideV5Power(): number {
            let power = this.V220Power.provideV220Power();
            //power经过各种操作-->5
            console.log('适配器：我悄悄的适配了电压');
            return 5;
        }
    }

    let mobile = new Mobile();
    let v5Power = new V5PowerAdapter(new V220Power());
    mobile.inputPower(v5Power);
}


//==================================
/**
优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。
缺点：使用命令模式可能会导致某些系统有过多的具体命令类。
 */
//命令模式
namespace Command{
    //门
    class Door{
        public Open(){
            console.log('开门');
        }

        public Close(){
            console.log("关门")
        }
    }

    //灯
    class Light{
        public on():void{
            console.log('开灯');
        }

        public off():void{
            console.log('关灯');
        }
    }

    interface Command {
        Excute():void;
    }

    //关灯命令
    class LightOffCommond implements Command{
        private light:Light;
        constructor(light:Light){
            this.light =light;
        }

        Excute(): void {
            this.light.off();
        }
    }

    //开灯命令
    class LightOnCommond implements Command{
        private light:Light;
        constructor(light:Light){
            this.light =light;
        }

        Excute(): void {
            this.light.on();
        }
    }

    class NoCommand implements Command{
        Excute(): void {
          
        }
    }

    class ControlPanel{
        private readonly CONTROL_SIZE:number = 9;
        private commandList:Command[];

        constructor(){
            this.commandList = [];
            for (let i = 0; i < this.CONTROL_SIZE; i++) {
                this.commandList.push(new NoCommand())       
            }
        }

        //设置按钮
        public setCommand(index:number,command:Command){
            this.commandList[index] = command;
        }

        //点击按钮
        public keyPressed(index:number){
            this.commandList[index].Excute();
        }
    }


    let control = new ControlPanel();
    let light = new Light();
    control.setCommand(0,new LightOffCommond(light));
    control.setCommand(1,new LightOnCommond(light));

    control.keyPressed(0);
    control.keyPressed(1);

    control.keyPressed(3);

    //定义一个命令，可以用于一系列的事情
    class QueueCommand implements Command{
        private commandList:Command[];
        constructor(commandList:Command[]){
            this.commandList = commandList;
        }

        Excute(): void {
            for (let i = 0; i < this.commandList.length; i++) {
                const element = this.commandList[i];
                element.Excute();
            }
        }
    }

    
    let queuqCommand = new QueueCommand([new LightOffCommond(light),new LightOnCommond(light)]);
    queuqCommand.Excute();

}























