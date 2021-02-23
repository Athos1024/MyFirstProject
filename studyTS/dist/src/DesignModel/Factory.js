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
    //柱状图类：具体产品类
    var HistogramChart = /** @class */ (function () {
        function HistogramChart() {
            console.log('创建柱状图');
        }
        HistogramChart.prototype.display = function () {
            console.log('显示柱状图');
        };
        return HistogramChart;
    }());
    //饼状图类：具体产品类
    var PieChart = /** @class */ (function () {
        function PieChart() {
            console.log('创建饼状图');
        }
        PieChart.prototype.display = function () {
            console.log('显示饼状图');
        };
        return PieChart;
    }());
    //折线图类：具体产品类
    var LineChart = /** @class */ (function () {
        function LineChart() {
            console.log('创建折线图');
        }
        LineChart.prototype.display = function () {
            console.log('显示折线图');
        };
        return LineChart;
    }());
    //图表工厂类：工厂类
    var ChartFactory = /** @class */ (function () {
        function ChartFactory() {
        }
        ChartFactory.getChart = function (type) {
            var chart = null;
            if (type == "histogram") {
                chart = new HistogramChart();
                console.log('"初始化设置柱状图！"');
            }
            else if (type == "pie") {
                chart = new PieChart();
                console.log('初始化设置饼状图！');
            }
            else if (type == "line") {
                chart = new LineChart();
                console.log('初始化设置折线图！');
            }
            return chart;
        };
        return ChartFactory;
    }());
    //客户端代码
    var Cline = /** @class */ (function () {
        function Cline() {
        }
        Cline.prototype.mian = function () {
            var chart;
            chart = ChartFactory.getChart("pie");
            chart.display();
        };
        return Cline;
    }());
    Factory_1.Cline = Cline;
})(Factory || (Factory = {}));
//# sourceMappingURL=Factory.js.map