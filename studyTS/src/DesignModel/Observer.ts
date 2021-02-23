
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
