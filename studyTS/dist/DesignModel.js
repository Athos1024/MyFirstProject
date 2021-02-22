//https://github.com/youlookwhat/DesignPattern
//https://www.yiibai.com/design_pattern/abstract_factory_pattern.html
//https://www.runoob.com/design-pattern/builder-pattern.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//传入类名
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
function fun(cls) {
}
fun(A);
//extend 与 implement 区别
/**
 * extend是继承，只能继承一个类
 * implement是实现多个接口
 * class A extends B implements C,D,E
 */
/**
 * interface 和 abstract
 * interface 没有访问修饰符，没有函数体,用implements。interface 就是特效的abstract 接口继承接口用 extends
 * abstract 可以抽象成员和方法，抽象方法没有函数体，子类必须实现
 */
//ts删除可以用 null
//删除对象属性可以用delete
//js.map是用来断点ts脚本
//ctrl + i 补全
//单列模式
var singleton;
(function (singleton) {
    //优点共享资源
    //缺点无法继承
    var Toast = /** @class */ (function () {
        //构造函数私有
        function Toast() {
        }
        ;
        //提供一个静态访问方法
        Toast.getInstance = function () {
            if (!this.instance) {
                Toast.instance = new Toast();
            }
            return Toast.instance;
        };
        return Toast;
    }());
})(singleton || (singleton = {}));
//=============================================//
/**
优点： 1、观察者和被观察者是抽象耦合的。 2、建立一套触发机制。
缺点： 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
 */
//监视者模式
var observer;
(function (observer) {
    var ObjectFor3D = /** @class */ (function () {
        function ObjectFor3D() {
            this.observerList = [];
        }
        ObjectFor3D.prototype.registerObserver = function (o) {
            this.observerList.push(o);
        };
        ObjectFor3D.prototype.removeObservr = function (o) {
            var index = this.observerList.indexOf(o);
            if (index > -1) {
                this.observerList.splice(index, 1);
            }
        };
        ObjectFor3D.prototype.notifyObserver = function () {
            for (var i = 0; i < this.observerList.length; i++) {
                var element = this.observerList[i];
                element.update(this.msg);
            }
        };
        //设置更新消息
        ObjectFor3D.prototype.setMsg = function (msg) {
            this.msg = msg;
            this.notifyObserver();
        };
        return ObjectFor3D;
    }());
    var Observer1 = /** @class */ (function () {
        function Observer1(Subject) {
            this.Subject = Subject;
            this.Subject.registerObserver(this);
        }
        Observer1.prototype.update = function (msg) {
            console.log('Observer1msg ==============', msg);
        };
        return Observer1;
    }());
    var Observer2 = /** @class */ (function () {
        function Observer2(Subject) {
            this.Subject = Subject;
            this.Subject.registerObserver(this);
        }
        Observer2.prototype.update = function (msg) {
            console.log('Observer2 msg ==============', msg);
        };
        return Observer2;
    }());
    var o = new ObjectFor3D();
    var ob1 = new Observer1(o);
    var ob2 = new Observer2(o);
    o.setMsg("监视者模式,传入消息");
})(observer || (observer = {}));
//==================================//
//工厂模式
/**
工厂模式
优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
抽象工厂
优点：当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。
缺点：产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator 里加代码，又要在具体的里面加代码。
*/
var Factory;
(function (Factory_1) {
    //加
    var Add = /** @class */ (function () {
        function Add() {
        }
        Add.prototype.operation = function (num1, num2) {
            return num1 + num2;
        };
        return Add;
    }());
    //减
    var Sub = /** @class */ (function () {
        function Sub() {
        }
        Sub.prototype.operation = function (num1, num2) {
            return num1 - num2;
        };
        return Sub;
    }());
    //乘
    var Mul = /** @class */ (function () {
        function Mul() {
        }
        Mul.prototype.operation = function (num1, num2) {
            return num1 * num2;
        };
        return Mul;
    }());
    //除
    var Div = /** @class */ (function () {
        function Div() {
        }
        Div.prototype.operation = function (num1, num2) {
            return num1 / num2;
        };
        return Div;
    }());
    //简单工厂模式
    /**
    //优点
    把具体产品的类型从客户端中解耦出来，通过工厂获取具体产品
    即便服务端修该了具体实现类的信息，客户端是不知道的，更符合`面向接口编程`的思想
    //缺点
    如果具体的产品过多，那么简单工厂会非常臃肿
    当客户端需要扩展产品时，需要修改服务端简单工厂的代码，这样违背了“开闭原则”
     */
    var Factory;
    (function (Factory) {
        var a;
        (function (a) {
            // 简单工厂
            var OperationFactory = /** @class */ (function () {
                function OperationFactory() {
                }
                OperationFactory.Operation = function (name) {
                    var operation = null;
                    switch (name) {
                        case "+":
                            operation = new Add();
                            break;
                        case "-":
                            operation = new Sub();
                            break;
                        case "*":
                            operation = new Mul();
                            break;
                        case "/":
                            operation = new Div();
                            break;
                    }
                    return operation;
                };
                return OperationFactory;
            }());
            var add = OperationFactory.Operation("+");
            add.operation(1, 2);
            var sub = OperationFactory.Operation("-");
            sub.operation(2, 1);
        })(a = Factory.a || (Factory.a = {}));
    })(Factory || (Factory = {}));
    /**
    //优点
    当客户端需要扩展一个新产品时，不需要修改服务端的代码，而是直接扩展一个工厂而已
    //缺点
    如果有多个产品等级（如：运算，比较...），那么工厂类的数量会增长很块
     */
    (function (Factory) {
        var b;
        (function (b) {
            //加法工厂
            var AddFactory = /** @class */ (function () {
                function AddFactory() {
                }
                AddFactory.prototype.GetOperation = function () {
                    return new Add();
                };
                return AddFactory;
            }());
            //减法工厂
            var SubFactory = /** @class */ (function () {
                function SubFactory() {
                }
                SubFactory.prototype.GetOperation = function () {
                    return new Sub();
                };
                return SubFactory;
            }());
            //乘法工厂
            var MulFactory = /** @class */ (function () {
                function MulFactory() {
                }
                MulFactory.prototype.GetOperation = function () {
                    return new Mul();
                };
                return MulFactory;
            }());
            //除法工厂
            var DivFactory = /** @class */ (function () {
                function DivFactory() {
                }
                DivFactory.prototype.GetOperation = function () {
                    return new Div();
                };
                return DivFactory;
            }());
            var operationFactory = new AddFactory();
            var add = operationFactory.GetOperation();
            add.operation(1, 2);
            //自定义产品
            var AddAndSub = /** @class */ (function () {
                function AddAndSub() {
                }
                AddAndSub.prototype.operation = function (num1, num2) {
                    return (num1 + num2) - num2;
                };
                return AddAndSub;
            }());
            //自定义工厂
            var AddAndSubFactory = /** @class */ (function () {
                function AddAndSubFactory() {
                }
                AddAndSubFactory.prototype.GetOperation = function () {
                    return new AddAndSub();
                };
                return AddAndSubFactory;
            }());
            //客户端添加新功能
            operationFactory = new AddAndSubFactory();
            var addAndSub = operationFactory.GetOperation();
            addAndSub.operation(5, 2);
        })(b = Factory.b || (Factory.b = {}));
    })(Factory || (Factory = {}));
    //抽象工厂
    (function (Factory) {
        var c;
        (function (c) {
            //大于0比较
            var GreaterThanZero = /** @class */ (function () {
                function GreaterThanZero() {
                }
                GreaterThanZero.prototype.compare = function (num) {
                    return num > 0;
                };
                return GreaterThanZero;
            }());
            // 小于0比较
            var LessThanZero = /** @class */ (function () {
                function LessThanZero() {
                }
                LessThanZero.prototype.compare = function (num) {
                    return num < 0;
                };
                return LessThanZero;
            }());
            var AddAndCompareFactory = /** @class */ (function () {
                function AddAndCompareFactory() {
                }
                AddAndCompareFactory.prototype.getOperation = function () {
                    return new Add();
                };
                AddAndCompareFactory.prototype.getCompare = function () {
                    return new GreaterThanZero();
                };
                return AddAndCompareFactory;
            }());
            var SubAndCompareFactory = /** @class */ (function () {
                function SubAndCompareFactory() {
                }
                SubAndCompareFactory.prototype.getOperation = function () {
                    return new Sub();
                };
                SubAndCompareFactory.prototype.getCompare = function () {
                    return new LessThanZero();
                };
                return SubAndCompareFactory;
            }());
            var addAndCompareFactory = new AddAndCompareFactory();
            var add = addAndCompareFactory.getOperation();
            var addRes = add.operation(1, 2);
        })(c = Factory.c || (Factory.c = {}));
    })(Factory || (Factory = {}));
})(Factory || (Factory = {}));
//=======================================//
/**
优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。
缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。
 */
//策略模式
var Strategy;
(function (Strategy) {
    var AttackJYSG = /** @class */ (function () {
        function AttackJYSG() {
        }
        AttackJYSG.prototype.attack = function () {
            console.log('九阳神功');
        };
        return AttackJYSG;
    }());
    var DefendTBS = /** @class */ (function () {
        function DefendTBS() {
        }
        DefendTBS.prototype.defend = function () {
            console.log('贴布衫');
        };
        return DefendTBS;
    }());
    var DisplayYZ = /** @class */ (function () {
        function DisplayYZ() {
        }
        DisplayYZ.prototype.display = function () {
            console.log('样子');
        };
        return DisplayYZ;
    }());
    var RunYWD = /** @class */ (function () {
        function RunYWD() {
        }
        RunYWD.prototype.run = function () {
            console.log('烟雾弹');
        };
        return RunYWD;
    }());
    var Role = /** @class */ (function () {
        function Role() {
        }
        Role.prototype.setDefendBehavior = function (defendBehavior) {
            this.defendBehavior = defendBehavior;
            return this;
        };
        Role.prototype.setAttackBehavior = function (attackBehavior) {
            this.attackBehavior = attackBehavior;
            return this;
        };
        Role.prototype.setDisplayBehavior = function (displayBeHavior) {
            this.displayBeHavior = displayBeHavior;
            return this;
        };
        Role.prototype.setRunBehavior = function (runBehavior) {
            this.runBehavior = runBehavior;
            return this;
        };
        Role.prototype.defend = function () {
            this.defendBehavior.defend();
        };
        Role.prototype.attack = function () {
            this.attackBehavior.attack();
        };
        Role.prototype.display = function () {
            this.displayBeHavior.display();
        };
        Role.prototype.run = function () {
            this.runBehavior.run();
        };
        return Role;
    }());
    var RoleA = /** @class */ (function (_super) {
        __extends(RoleA, _super);
        function RoleA(name) {
            var _this = _super.call(this) || this;
            _this.name = name;
            return _this;
        }
        return RoleA;
    }(Role));
    var roleA = new RoleA("A");
    roleA.setAttackBehavior(new AttackJYSG())
        .setDefendBehavior(new DefendTBS())
        .setDisplayBehavior(new DisplayYZ())
        .setRunBehavior(new RunYWD());
    roleA.attack();
    roleA.defend();
    roleA.display();
    roleA.run();
})(Strategy || (Strategy = {}));
//**================== */
/**
优点： 1、可以让任何两个没有关联的类一起运行。 2、提高了类的复用。 3、增加了类的透明度。 4、灵活性好。

缺点： 1、过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是
 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。
 因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。 2.由于 JAVA 至多继承一个类，
 所以至多只能适配一个适配者类，而且目标类必须是抽象类。
 */
//适配器模式
var Adapter;
(function (Adapter) {
    //充电
    var Mobile = /** @class */ (function () {
        function Mobile() {
        }
        Mobile.prototype.inputPower = function (power) {
            var provideV5Power = power.provideV5Power();
            console.log('我需要5V电压充电' + provideV5Power);
        };
        return Mobile;
    }());
    //家用220V电压
    var V220Power = /** @class */ (function () {
        function V220Power() {
        }
        V220Power.prototype.provideV220Power = function () {
            console.log('提供一个220V电压');
            return 220;
        };
        return V220Power;
    }());
    //适配器，把220V电压变成5V
    var V5PowerAdapter = /** @class */ (function () {
        function V5PowerAdapter(V220Power) {
            this.V220Power = V220Power;
        }
        V5PowerAdapter.prototype.provideV5Power = function () {
            var power = this.V220Power.provideV220Power();
            //power经过各种操作-->5
            console.log('适配器：我悄悄的适配了电压');
            return 5;
        };
        return V5PowerAdapter;
    }());
    var mobile = new Mobile();
    var v5Power = new V5PowerAdapter(new V220Power());
    mobile.inputPower(v5Power);
})(Adapter || (Adapter = {}));
//==================================
/**
优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。
缺点：使用命令模式可能会导致某些系统有过多的具体命令类。
 */
//命令模式
var Command;
(function (Command) {
    //门
    var Door = /** @class */ (function () {
        function Door() {
        }
        Door.prototype.Open = function () {
            console.log('开门');
        };
        Door.prototype.Close = function () {
            console.log("关门");
        };
        return Door;
    }());
    //灯
    var Light = /** @class */ (function () {
        function Light() {
        }
        Light.prototype.on = function () {
            console.log('开灯');
        };
        Light.prototype.off = function () {
            console.log('关灯');
        };
        return Light;
    }());
    //关灯命令
    var LightOffCommond = /** @class */ (function () {
        function LightOffCommond(light) {
            this.light = light;
        }
        LightOffCommond.prototype.Excute = function () {
            this.light.off();
        };
        return LightOffCommond;
    }());
    //开灯命令
    var LightOnCommond = /** @class */ (function () {
        function LightOnCommond(light) {
            this.light = light;
        }
        LightOnCommond.prototype.Excute = function () {
            this.light.on();
        };
        return LightOnCommond;
    }());
    var NoCommand = /** @class */ (function () {
        function NoCommand() {
        }
        NoCommand.prototype.Excute = function () {
        };
        return NoCommand;
    }());
    var ControlPanel = /** @class */ (function () {
        function ControlPanel() {
            this.CONTROL_SIZE = 9;
            this.commandList = [];
            for (var i = 0; i < this.CONTROL_SIZE; i++) {
                this.commandList.push(new NoCommand());
            }
        }
        //设置按钮
        ControlPanel.prototype.setCommand = function (index, command) {
            this.commandList[index] = command;
        };
        //点击按钮
        ControlPanel.prototype.keyPressed = function (index) {
            this.commandList[index].Excute();
        };
        return ControlPanel;
    }());
    var control = new ControlPanel();
    var light = new Light();
    control.setCommand(0, new LightOffCommond(light));
    control.setCommand(1, new LightOnCommond(light));
    control.keyPressed(0);
    control.keyPressed(1);
    control.keyPressed(3);
    //定义一个命令，可以用于一系列的事情
    var QueueCommand = /** @class */ (function () {
        function QueueCommand(commandList) {
            this.commandList = commandList;
        }
        QueueCommand.prototype.Excute = function () {
            for (var i = 0; i < this.commandList.length; i++) {
                var element = this.commandList[i];
                element.Excute();
            }
        };
        return QueueCommand;
    }());
    var queuqCommand = new QueueCommand([new LightOffCommond(light), new LightOnCommond(light)]);
    queuqCommand.Excute();
})(Command || (Command = {}));
//=======================================
/**
优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
缺点：多层装饰比较复杂。
 */
//装饰器
var decorator;
(function (decorator) {
    //武器
    var ArmEquip = /** @class */ (function () {
        function ArmEquip() {
        }
        ArmEquip.prototype.CalculateAttack = function () {
            return 20;
        };
        ArmEquip.prototype.Des = function () {
            return "屠龙刀";
        };
        return ArmEquip;
    }());
    //戒指
    var RingEquip = /** @class */ (function () {
        function RingEquip() {
        }
        RingEquip.prototype.CalculateAttack = function () {
            return 5;
        };
        RingEquip.prototype.Des = function () {
            return "圣戒";
        };
        return RingEquip;
    }());
    //蓝宝石
    var BlueGemDrcorator = /** @class */ (function () {
        function BlueGemDrcorator(equip) {
            this.equip = equip;
        }
        BlueGemDrcorator.prototype.CalculateAttack = function () {
            return 5 + this.equip.CalculateAttack();
        };
        BlueGemDrcorator.prototype.Des = function () {
            return this.equip.Des() + "+ 蓝宝石";
        };
        return BlueGemDrcorator;
    }());
    //黄宝石
    var YellowGemDrocorator = /** @class */ (function () {
        function YellowGemDrocorator(equip) {
            this.equip = equip;
        }
        YellowGemDrocorator.prototype.CalculateAttack = function () {
            return 10 + this.equip.CalculateAttack();
        };
        YellowGemDrocorator.prototype.Des = function () {
            return this.equip.Des() + "+ 黄宝石";
        };
        return YellowGemDrocorator;
    }());
    var equip = new YellowGemDrocorator(new BlueGemDrcorator(new ArmEquip()));
    console.log(equip.CalculateAttack());
    console.log(equip.Des());
})(decorator || (decorator = {}));
//# sourceMappingURL=DesignModel.js.map