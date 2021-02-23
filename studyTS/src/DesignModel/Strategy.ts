
/**
优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。
缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。
 */
//策略模式
namespace Strategy {

    //攻击
    interface IAttackBehavior {
        attack(): void;
    }

    //防御
    interface IDefendBehavior {
        defend(): void;
    }

    //显示
    interface IDisplayBehavior {
        display(): void;
    }

    //逃跑
    interface IRunBehavior {
        run(): void;
    }

    class AttackJYSG implements IAttackBehavior {
        attack() {
            console.log('九阳神功');
        }
    }

    class DefendTBS implements IDefendBehavior {
        defend() {
            console.log('贴布衫');
        }
    }

    class DisplayYZ implements IDisplayBehavior {
        display() {
            console.log('样子');
        }
    }

    class RunYWD implements IRunBehavior {
        run() {
            console.log('烟雾弹');
        }
    }

    abstract class Role {
        protected name: string;

        protected defendBehavior: IDefendBehavior;
        protected attackBehavior: IAttackBehavior;
        protected displayBeHavior: IDisplayBehavior;
        protected runBehavior: IRunBehavior;

        public setDefendBehavior(defendBehavior: IDefendBehavior): Role {
            this.defendBehavior = defendBehavior;
            return this;
        }

        public setAttackBehavior(attackBehavior: IAttackBehavior): Role {
            this.attackBehavior = attackBehavior;
            return this;
        }

        public setDisplayBehavior(displayBeHavior: IDisplayBehavior): Role {
            this.displayBeHavior = displayBeHavior;
            return this;
        }

        public setRunBehavior(runBehavior: IRunBehavior): Role {
            this.runBehavior = runBehavior;
            return this;
        }

        public defend(): void {
            this.defendBehavior.defend();
        }

        public attack(): void {
            this.attackBehavior.attack();
        }

        public display(): void {
            this.displayBeHavior.display();
        }

        public run(): void {
            this.runBehavior.run();
        }

    }

    class RoleA extends Role {
        constructor(name: string) {
            super();
            this.name = name;
        }
    }

    let roleA = new RoleA("A");
    roleA.setAttackBehavior(new AttackJYSG())
        .setDefendBehavior(new DefendTBS())
        .setDisplayBehavior(new DisplayYZ())
        .setRunBehavior(new RunYWD());
    roleA.attack();
    roleA.defend();
    roleA.display();
    roleA.run();
}