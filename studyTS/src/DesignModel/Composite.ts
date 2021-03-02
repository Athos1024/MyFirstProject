
//组合模式
export namespace Composite{
/**
优点： 1、高层模块调用简单。 2、节点自由增加。
缺点：在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。
 */
    class Employee {
        private name:string;
        private dept:string;
        private salary:number;
        private eList:Employee[];

        constructor(name:string,dept:string,sal:number){
            this.name = name;
            this.dept = dept;
            this.salary = sal;
            this.eList = [];
        }

        public add(e:Employee):void{
            this.eList.push(e);
        }

        public remove(e:Employee):void{
            let index = this.eList.indexOf(e);
            this.eList.splice(index,1);
        }

        public getSubordinates():Employee[]{
            return this.eList;
        }

        public toString():string{
            return this.name + "  " + this.dept + "  " + this.salary;
        }
    }


    export class CompositeDemo{
        public static client():void{
            let CEO:Employee = new Employee("小米","CEO",30000);

            let headSales =new Employee("小明","Sales",20000);
            let headMarketing = new Employee("小马","Marketing",20000);

            let clerk1 = new Employee("小号","Marking",10000);
            let clerk2 = new Employee("小天","Marking",10000);

            let salesExecutive1 = new Employee("小a","sales",10000);
            let salesExecutive2 = new Employee("小b","sales",10000);

            CEO.add(headSales);
            CEO.add(headMarketing);

            headMarketing.add(clerk1);
            headMarketing.add(clerk2);

            headSales.add(salesExecutive1);
            headSales.add(salesExecutive2);

            for (let i = 0; i < CEO.getSubordinates().length; i++) {
                const element = CEO.getSubordinates()[i];
                console.log(element.toString());
                for (let j = 0; j < element.getSubordinates().length; j++) {
                    const item = element.getSubordinates()[j];
                    console.log(item.toString());
                }
            }
        }
    }

}