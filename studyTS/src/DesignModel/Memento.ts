//备忘录模式
export namespace Memento{
/**
优点： 1、给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态。 2、实现了信息的封装，使得用户不需要关心状态的保存细节。
缺点：消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
 */

    class Memento{
        private state:string;

        constructor(state:string){
            this.state = state;
        }

        public get getState():string{
            return this.state;
        }
    }

    class Originator {
        private state:string;

        public setState(state:string):void{
            this.state = state;
        }

        public getState():string{
            return this.state;
        }

        public saveStateToMemento():Memento{
            return new Memento(this.state);
        }

        public getStateFromMemento(memento:Memento):void{
            this.state = memento.getState;
        }
    }

    class CareTaker{
        private mementoList:Memento[] = [];
        public add(state:Memento){
            this.mementoList.push(state);
        }

        public get(index:number):Memento{
            return this.mementoList[index];
        }
    }

    export class MementoDemo{
        public static main():void{
            let originator:Originator = new Originator();
            let careTaker:CareTaker = new CareTaker();
            
            originator.setState("state #1");
            originator.setState("state #2");

            careTaker.add(originator.saveStateToMemento());
            originator.setState("state #3");
            careTaker.add(originator.saveStateToMemento());
            originator.setState("state #4");

            console.log('current state',originator.getState());
            originator.getStateFromMemento(careTaker.get(0));
            console.log("first saved state:",originator.getState());
            originator.getStateFromMemento(careTaker.get(1));
            console.log("second savad state:",originator.getState());

        }
    }

}