namespace Visitor{

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