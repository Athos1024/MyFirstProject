export namespace Mediator{

    // 优点： 1、降低了类的复杂度，将一对多转化成了一对一。 2、各个类之间的解耦。 3、符合迪米特原则。
    // 缺点：中介者会庞大，变得复杂难以维护

    //创建中介者
    class ChatRoom{
        public static showMessage(user:User,msg:string){
            console.log(new Date().toString() + " [" + user.Name +"]:",msg);
        }
    }

    //用户类
    class User{
        private name:string;

        public get Name():string{
            return this.name;
        }

        public set Name(name:string){
            this.name = name;
        }
        
        constructor(name:string){
            this.name = name;
        }

        public sendMessage(msg:string):void{
            ChatRoom.showMessage(this,msg);
        }
    }

    export class Mediator{
        public static main():void{
            let user1:User = new User("小A");
            let user2:User = new User("小c");

            user1.sendMessage("hello");
            user2.sendMessage("world");
        }
    }
    

}


