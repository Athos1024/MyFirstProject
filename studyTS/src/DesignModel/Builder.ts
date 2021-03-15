//建筑这模式
export namespace Builder{

    /**
     * 优点： 1、建造者独立，易扩展。 2、便于控制细节风险。
缺点： 1、产品必须有共同点，范围有限制。 2、如内部变化复杂，会有很多的建造类。
     */

    //食品接口
    interface Item{
        name():string;
        packing():Packing;
        price():number;
    }

    //食品包装接口
    interface Packing{
        pack():string;
    }

    //包装实现类：包装
    class Wrapper implements Packing{
        pack(): string {
            return "warpper";
        }
    }

    //包装实现类：瓶子
    class Bottle implements Packing{
        pack(): string {
            return "bottle";
        }
    }

    //食品实现类：抽象汉堡
    abstract class Burger implements Item{
        abstract name(): string;
        packing(): Packing {
            return new Wrapper();
        }
        abstract price(): number;
    }

    //食品实现类：抽象饮料
    abstract class ColdDrink implements Item{
        abstract name(): string;
        packing(): Packing {
            return new Bottle();
        }
        abstract price(): number;
    }

    //抽象汉堡实现类：蔬菜汉堡
    class VerBurger extends Burger{
        name(): string {
            return "VerBurger"
        }
        price(): number {
            return 10;
        }
    }

    //抽象汉堡实现类：鸡肉汉堡
    class ChickenBurger extends Burger{
        name(): string {
           return "chickenBurger"
        }
        price(): number {
            return 20;
        }
    }

    //饮料实现类：可乐
    class Coke extends ColdDrink{
        name(): string {
            return "可乐"
        }
        price(): number {
            return 5;
        }
    }

    //饮料实现类：百事
    class Pepsi extends ColdDrink{
        name(): string {
            return "百事"
        }
        price(): number {
            return 5.5;
        }
    }

    //套餐
    class Meal{
        private itemList:Item[] = [];
        public addItem(item:Item):void{
            this.itemList.push(item);
        }

        public getCost():number{
            let cost = 0;
            for (let i = 0; i < this.itemList.length; i++) {
                const element = this.itemList[i];
                cost += element.price();
            }
            return cost;
        }

        public showItem():void{
            for (let i = 0; i < this.itemList.length; i++) {
                const element = this.itemList[i];
                console.log(element.name());
                console.log(element.packing());
                console.log(element.price());
            }
        }
    }


    
    class MealBuilder{
        public prepareVegMeal():Meal{
            let meal:Meal = new Meal();
            meal.addItem(new VerBurger());
            meal.addItem(new Pepsi());
            return meal;
        }

        public prepareNonVegMeal():Meal{
            let meal:Meal = new Meal();
            meal.addItem(new ChickenBurger());
            meal.addItem(new Coke());
            return meal;
        }
    }
    

    export class BuilderDemo{
        public static clinet():void{
            let mB = new MealBuilder();
            let m = mB.prepareNonVegMeal();
            // m.getCost();
            m.showItem();
        }
    }
//产品角色：包含多个组成部件的复杂对象。
class Product {
    private partA: String
    private partB: String
    private partC: String
    public setPartA(partA: String): void {
        this.partA = partA
    }
    public setPartB(partB: String): void {
        this.partB = partB
    }
    public setPartC(partC: String): void {
        this.partC = partC
    }
    public show(): void {
        //显示产品的特性
        console.log('产品的部件分别为：', this.partA, this.partB, this.partC)
    }
}



//抽象建造者：包含创建产品各个子部件的抽象方法。
abstract class Builder {
    //创建产品对象
    protected product: Product = new Product()
    public abstract buildPartA(): void
    public abstract buildPartB(): void
    public abstract buildPartC(): void
    //返回产品对象
    public getResult(): Product {
        return this.product
    }
}
//具体建造者：实现了抽象建造者接口。
class ConcreteBuilder extends Builder {
    constructor() {
        super()
    }
    public buildPartA(): void {
        this.product.setPartA("partA")
    }
    public buildPartB(): void {
        this.product.setPartB("partB")
    }
    public buildPartC(): void {
        this.product.setPartC("partC")
    }
}
//具体建造者1：实现了抽象建造者接口。
class ConcreteBuilder1 extends Builder {
    constructor() {
        super()
    }
    public buildPartA(): void {
        this.product.setPartA("partA1")
    }
    public buildPartB(): void {
        this.product.setPartB("partB1")
    }
    public buildPartC(): void {
        this.product.setPartC("partC1")
    }
}
//指挥者：调用建造者中的方法完成复杂对象的创建。
class Director {
    public static getProduct(builder: Builder) {
        builder.buildPartA()
        builder.buildPartB()
        builder.buildPartC()
        return builder.getResult()
    }
}

//测试
class Client {
    public static main(): void {
        const builder0: Builder = new ConcreteBuilder()
        const builder1: Builder = new ConcreteBuilder1()
        //测试:创建者builder0
        // const product: Product = Director.getProduct(builder0)
        //测试:创建者builder1,调整部件
        const product: Product = Director.getProduct(builder1)
        product.show()
    }
}
Client.main()
}





