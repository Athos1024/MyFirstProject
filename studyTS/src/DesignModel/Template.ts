

/**
优点： 1、封装不变部分，扩展可变部分。 2、提取公共代码，便于维护。 3、行为由父类控制，子类实现。
缺点：每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。
 */

//模板模式
namespace Template {

    abstract class Worker {
        protected _name: string;
        constructor(name: string) {
            this._name = name;
        }

        public get IsNeedPrintDate(): boolean {
            return false;
        }

        public workOneDay(): void {
            console.log('--------------work start-----------------');
            this.enterCompany();
            this.computerOn();
            this.computerOff();
            this.exitCompany();
            if (this.IsNeedPrintDate) {
                console.log(new Date().getTime());
            }
            console.log('--------------work end-----------------');
        }

        //工作
        public abstract work(): void;

        //关闭电脑
        private computerOff(): void {
            console.log(this._name + "关闭电脑");
        }

        private computerOn(): void {
            console.log(this._name + "开启电脑");
        }

        public enterCompany(): void {
            console.log(this._name + "进入公司");
        }

        public exitCompany(): void {
            console.log(this._name + "离开公司");
        }

    }

    class HRWorker extends Worker {
        public get IsNeedPrintDate(): boolean {
            return true;
        }

        public work(): void {
            console.log(this._name + '看简历->打电话->接电话');
        }
    }

    class ITWorker extends Worker {
        public work(): void {
            console.log(this._name + "写代码->deBug->fix bug");
        }
    }

    let HR = new HRWorker("a君");
    HR.workOneDay();
    let IT = new ITWorker("b君");
    IT.workOneDay();
}
