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
 * interface 没有访问修饰符，没有函数体,用implements。interface 就是特效的abstract
 * abstract 可以抽象成员和方法，抽象方法没有函数体，子类必须实现
 */
//ts删除可以用 null
//删除对象属性可以用delete
//js.map是用来断点ts脚本
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
优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
 */
var Factory;
(function (Factory_1) {
    // 1、静态工厂模式
    // 这个最常见了，项目中的辅助类，TextUtil.isEmpty等，类+静态方法。下面开始详细介绍：略。
    var RouJiaMo = /** @class */ (function () {
        function RouJiaMo() {
        }
        //准备工作
        RouJiaMo.prototype.prepare = function () {
            console.log('揉面-剁肉-完成准备工作');
        };
        //使用你们的专用袋-包装
        RouJiaMo.prototype.pack = function () {
            console.log('肉夹馍-专用袋-包装');
        };
        //秘制设备-烘烤2分钟
        RouJiaMo.prototype.fire = function () {
            console.log('若夹馍·专用设备-烘烤');
        };
        return RouJiaMo;
    }());
    //酸味肉夹馍
    var SuanRouJiaMo = /** @class */ (function (_super) {
        __extends(SuanRouJiaMo, _super);
        function SuanRouJiaMo() {
            var _this = _super.call(this) || this;
            _this._name = "酸味肉夹馍";
            return _this;
        }
        return SuanRouJiaMo;
    }(RouJiaMo));
    //辣味肉夹馍
    var LaRouJiaMo = /** @class */ (function (_super) {
        __extends(LaRouJiaMo, _super);
        function LaRouJiaMo() {
            var _this = _super.call(this) || this;
            _this._name = "辣味肉夹馍";
            return _this;
        }
        return LaRouJiaMo;
    }(RouJiaMo));
    //简单工厂
    var Factory;
    (function (Factory) {
        var a;
        (function (a) {
            var SimpleRouJiaMoFactory = /** @class */ (function () {
                function SimpleRouJiaMoFactory() {
                }
                SimpleRouJiaMoFactory.prototype.createRouJiaMo = function (type) {
                    var roujiamo = null;
                    if (type == "Suan") {
                        roujiamo = new SuanRouJiaMo();
                    }
                    else if (type == "La") {
                        roujiamo = new LaRouJiaMo();
                    }
                    return roujiamo;
                };
                return SimpleRouJiaMoFactory;
            }());
            var RoujiamoStore = /** @class */ (function () {
                function RoujiamoStore(factory) {
                    this.factory = factory;
                }
                //根据传入类型卖不同的肉夹馍
                RoujiamoStore.prototype.sellRouJiaMo = function (type) {
                    var roujiamo = this.factory.createRouJiaMo(type);
                    roujiamo.prepare();
                    roujiamo.fire();
                    roujiamo.pack();
                    return roujiamo;
                };
                return RoujiamoStore;
            }());
        })(a = Factory.a || (Factory.a = {}));
    })(Factory || (Factory = {}));
    //工厂方法
    (function (Factory) {
        var b;
        (function (b) {
            var RoujiaMoStore = /** @class */ (function () {
                function RoujiaMoStore() {
                }
                //根据传入类型卖不同的肉夹馍
                RoujiaMoStore.prototype.sellRouJiaMo = function (type) {
                    var roujiamo = this.createRouJiaMo(type);
                    roujiamo.prepare();
                    roujiamo.fire();
                    roujiamo.pack();
                    return roujiamo;
                };
                return RoujiaMoStore;
            }());
            var XianRouJiaMoStore = /** @class */ (function (_super) {
                __extends(XianRouJiaMoStore, _super);
                function XianRouJiaMoStore() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                XianRouJiaMoStore.prototype.createRouJiaMo = function (type) {
                    var roujiamo = null;
                    if (type == "Suan") {
                        roujiamo = new SuanRouJiaMo();
                    }
                    else if (type == "La") {
                        roujiamo = new LaRouJiaMo();
                    }
                    return roujiamo;
                };
                return XianRouJiaMoStore;
            }(RoujiaMoStore));
        })(b = Factory.b || (Factory.b = {}));
    })(Factory || (Factory = {}));
    //抽象工厂模式
    (function (Factory) {
        var c;
        (function (c) {
            var Rect = /** @class */ (function () {
                function Rect() {
                }
                Rect.prototype.draw = function () {
                    console.log('draw Rect');
                };
                return Rect;
            }());
            var Square = /** @class */ (function () {
                function Square() {
                }
                Square.prototype.draw = function () {
                    console.log('draw Square');
                };
                return Square;
            }());
            var Red = /** @class */ (function () {
                function Red() {
                }
                Red.prototype.fill = function () {
                    console.log('color red');
                };
                return Red;
            }());
            var Greed = /** @class */ (function () {
                function Greed() {
                }
                Greed.prototype.fill = function () {
                    console.log('color greed');
                };
                return Greed;
            }());
            var AbstractFactory = /** @class */ (function () {
                function AbstractFactory() {
                }
                return AbstractFactory;
            }());
            var shapeFactory = /** @class */ (function (_super) {
                __extends(shapeFactory, _super);
                function shapeFactory() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                shapeFactory.prototype.getColor = function (color) {
                    return null;
                };
                shapeFactory.prototype.getDraw = function (shap) {
                    if (shap == null) {
                        return null;
                    }
                    if (shap == "rect") {
                        return new Rect();
                    }
                    else if (shap == "square") {
                        return new Square();
                    }
                };
                return shapeFactory;
            }(AbstractFactory));
            var ColorFactory = /** @class */ (function (_super) {
                __extends(ColorFactory, _super);
                function ColorFactory() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ColorFactory.prototype.getColor = function (color) {
                    if (color == null) {
                        return null;
                    }
                    if (color == "red") {
                        return new Red();
                    }
                    else if (color == "greed") {
                        return new Greed();
                    }
                };
                ColorFactory.prototype.getDraw = function (shap) {
                    return null;
                };
                return ColorFactory;
            }(AbstractFactory));
            var FactoryProducer = /** @class */ (function () {
                function FactoryProducer() {
                }
                FactoryProducer.getFactory = function (choice) {
                    if (choice == "SHAPE") {
                        return new shapeFactory();
                    }
                    else if (choice == "COLOR") {
                        return new ColorFactory();
                    }
                    return null;
                };
                return FactoryProducer;
            }());
            var f1 = FactoryProducer.getFactory("SHAPE");
            var shap = f1.getDraw("rect");
            shap.draw();
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
var Attack1 = /** @class */ (function () {
    function Attack1() {
    }
    Attack1.prototype.attack = function () {
        console.log('attack');
    };
    return Attack1;
}());
var Dispaly1 = /** @class */ (function () {
    function Dispaly1() {
    }
    Dispaly1.prototype.display = function () {
        console.log('display');
    };
    return Dispaly1;
}());
var Run1 = /** @class */ (function () {
    function Run1() {
    }
    Run1.prototype.run = function () {
        console.log('run');
    };
    return Run1;
}());
var Defend1 = /** @class */ (function () {
    function Defend1() {
    }
    Defend1.prototype.defend = function () {
        console.log('defend');
    };
    return Defend1;
}());
var Role = /** @class */ (function () {
    function Role() {
    }
    Role.prototype.setAttackBeHavior = function (attackBehavior) {
        this.attackBehavior = attackBehavior;
        return this;
    };
    Role.prototype.setDefendBehavior = function (defendBehavior) {
        this.defendBehavior = defendBehavior;
        return this;
    };
    Role.prototype.setDisplayBehavior = function (displayBehavior) {
        this.displayBehavior = displayBehavior;
        return this;
    };
    Role.prototype.setRunBeHavior = function (runBehavior) {
        this.runBehavior = runBehavior;
        return this;
    };
    Role.prototype.run = function () {
        this.runBehavior.run();
    };
    Role.prototype.display = function () {
        this.displayBehavior.display();
    };
    Role.prototype.defend = function () {
        this.defendBehavior.defend();
    };
    Role.prototype.attack = function () {
        this.attackBehavior.attack();
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
var roleA = new RoleA("a");
roleA.setDisplayBehavior(new Dispaly1()).setRunBeHavior(new Run1()).setDefendBehavior(new Defend1()).setAttackBeHavior(new Attack1());
roleA.run();
roleA.display();
roleA.defend();
roleA.attack();
//# sourceMappingURL=DesignModel.js.map