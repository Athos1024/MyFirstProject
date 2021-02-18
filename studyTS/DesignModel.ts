namespace singleton{
    //优点共享资源
    //缺点无法继承
    class Toast{
        //静态私有的成员
        private static instance:Toast;
        //构造函数私有
        private constructor(){};
        //提供一个静态访问方法
        public static getInstance():Toast{
            if(!this.instance){
                Toast.instance = new Toast();
            }
            return Toast.instance;
        }
    }

}

namespace observer{

    //主题接口，所有主题必须实现此接口
    interface Subject{

        //注册一个观察者
        registerObserver(o:Observer):void;

        //移除一个观察者
        removeObservr(o:Observer):void;

        //通知所有的观察者
        notifyObserver():void;
    }

    //所有观察者接口
    interface Observer{
        update(msg:string):void;
    }

    class ObjectFor3D implements Subject{

        private observerList:Observer[] = [];

        private msg:string;

        registerObserver(o:Observer) :void{
            this.observerList.push(o);
        }

        removeObservr(o:Observer):void{
            this.observerList.indexOf(o);
        }

        notifyObserver():void{

        }



    }
}

class A{

}

let aList:A[] = [];
let a1 = new A();
let a2 = new A();

aList.push(a1);
aList.push(a2);

console.log(aList.indexOf(a2));
 
//https://blog.csdn.net/lmj623565791/article/details/24179699
//https://github.com/youlookwhat/DesignPattern