//建筑这模式
export namespace Builder{

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
}