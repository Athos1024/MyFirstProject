//访问者模式
namespace Visitor{

    /**
     * 优点： 1、符合单一职责原则。 2、优秀的扩展性。 3、灵活性。

缺点： 1、具体元素对访问者公布细节，违反了迪米特原则。 2、具体元素变更比较困难。 3、违反了依赖倒置原则，依赖了具体类，没有依赖抽象。
     */
    interface Elemnet {
        accept()
    }

    class ConcreteElementA implements Elemnet{
        constructor(private name:string,private num:number){
        }

        get Name():string{
            return this.name;
        }

        get Money():string{
            return this.num +"万元";
        }

        accept() {
            
        }
    }

    class ConcreteElementB implements Elemnet{
        [x: string]: any;
        constructor(private name:string,private num:number){
        }

        get Name():string{
            return this.name;
        }

        get Money():string{
            return this.num +"万元";
        }

        accept() {
            
        }
    }

    interface Visitor{
        visitA(element:ConcreteElementA):void;
        visita(element:ConcreteElementB):void;
    }


}