export namespace NullObject{

    abstract class AbstractCustomer{
        protected name:string;
        public abstract isNil():boolean;
        public abstract getName():string;
    }

    class RealCustomer extends AbstractCustomer{
        public isNil(): boolean {
            return false;
        }
        public getName(): string {
            return this.name
        }
    
        constructor(name:string){
            super();
            this.name = name;
        }
    }

    class NullCustomer extends AbstractCustomer{
        public isNil(): boolean {
            return true;
        }
        public getName(): string {
            return "Not available in customer database;"
        }
    }

    class CustomerFactory {

        public static readonly nameArr:string[] = ["A","B","C"];
        
        public static getCustomer(name:string):AbstractCustomer{
            for (let i = 0; i < this.nameArr.length; i++) {
                const element = this.nameArr[i];
                if(this.nameArr[i] == name){
                    return new RealCustomer(name);
                }
            }
            return new NullCustomer();
        }
    }

    export class NullDemo{
        public static main():void{

            let customer1:AbstractCustomer = CustomerFactory.getCustomer("A");
            let customer2:AbstractCustomer = CustomerFactory.getCustomer("B");
            let customer3:AbstractCustomer = CustomerFactory.getCustomer("C");
            let customer4:AbstractCustomer = CustomerFactory.getCustomer("D");

            console.log('=================');
            console.log(customer1.getName());
            console.log(customer2.getName());
            console.log(customer3.getName());
            console.log(customer4.getName());
        }
    }



}