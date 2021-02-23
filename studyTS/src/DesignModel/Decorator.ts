
/**
优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
缺点：多层装饰比较复杂。
 */
//装饰器
namespace decorator {

    //装备接口
    interface IEquip {

        CalculateAttack(): number;

        Des(): string;
    }

    //武器
    class ArmEquip implements IEquip {
        CalculateAttack(): number {
            return 20;
        }
        Des(): string {
            return "屠龙刀"
        }
    }

    //戒指
    class RingEquip implements IEquip {
        CalculateAttack(): number {
            return 5;
        }
        Des(): string {
            return "圣戒"
        }
    }

    //装饰品接口
    interface IEquipDecorator extends IEquip {

    }

    //具体装饰类  蓝宝石
    class BlueGemDrcorator implements IEquipDecorator {
        private equip: IEquip;

        constructor(equip: IEquip) {
            this.equip = equip;
        }
        CalculateAttack(): number {
            return 5 + this.equip.CalculateAttack();
        }
        Des(): string {
            return this.equip.Des() + "+ 蓝宝石"
        }
    }

    //具体装饰类   黄宝石
    class YellowGemDrocorator implements IEquipDecorator {
        private equip: IEquip;

        constructor(equip: IEquip) {
            this.equip = equip;
        }
        CalculateAttack(): number {
            return 10 + this.equip.CalculateAttack();
        }
        Des(): string {
            return this.equip.Des() + "+ 黄宝石"
        }
    }


    let equip: IEquip = new YellowGemDrocorator(new BlueGemDrcorator(new ArmEquip()));
    console.log(equip.CalculateAttack());
    console.log(equip.Des());
}

