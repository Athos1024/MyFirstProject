
//工厂模式
/**
工厂模式
优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
抽象工厂
优点：当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。
缺点：产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator 里加代码，又要在具体的里面加代码。 
*/
export namespace Factory {

    interface IOperation {
        operation(num1: number, num2: number): number;
    }

    //加
    class Add implements IOperation {
        operation(num1: number, num2: number): number {
            return num1 + num2;
        }
    }

    //减
    class Sub implements IOperation {
        operation(num1: number, num2: number): number {
            return num1 - num2;
        }
    }

    //乘
    class Mul implements IOperation {
        operation(num1: number, num2: number): number {
            return num1 * num2;
        }
    }

    //除
    class Div implements IOperation {
        operation(num1: number, num2: number): number {
            return num1 / num2;
        }
    }

    //简单工厂模式
    /**
    //优点
    把具体产品的类型从客户端中解耦出来，通过工厂获取具体产品
    即便服务端修该了具体实现类的信息，客户端是不知道的，更符合`面向接口编程`的思想
    //缺点
    如果具体的产品过多，那么简单工厂会非常臃肿
    当客户端需要扩展产品时，需要修改服务端简单工厂的代码，这样违背了“开闭原则”
     */
    namespace Factory.a {
        // 简单工厂
        class OperationFactory {
            public static Operation(name: string): IOperation {
                let operation: IOperation = null;
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
            }
        }

        let add: IOperation = OperationFactory.Operation("+");
        add.operation(1, 2);
        let sub: IOperation = OperationFactory.Operation("-");
        sub.operation(2, 1);
    }

    /**
    //优点
    当客户端需要扩展一个新产品时，不需要修改服务端的代码，而是直接扩展一个工厂而已
    //缺点
    如果有多个产品等级（如：运算，比较...），那么工厂类的数量会增长很块
     */
    namespace Factory.b {
        //运算工厂
        interface IOperationFactory {
            GetOperation(): IOperation;
        }

        //加法工厂
        class AddFactory implements IOperationFactory {
            GetOperation(): IOperation {
                return new Add();
            }
        }

        //减法工厂
        class SubFactory implements IOperationFactory {
            GetOperation(): IOperation {
                return new Sub();
            }
        }

        //乘法工厂
        class MulFactory implements IOperationFactory {
            GetOperation(): IOperation {
                return new Mul();
            }
        }

        //除法工厂
        class DivFactory implements IOperationFactory {
            GetOperation(): IOperation {
                return new Div();
            }
        }

        let operationFactory: IOperationFactory = new AddFactory();
        let add: IOperation = operationFactory.GetOperation();
        add.operation(1, 2);

        //自定义产品
        class AddAndSub implements IOperation {
            operation(num1: number, num2: number): number {
                return (num1 + num2) - num2;
            }
        }

        //自定义工厂
        class AddAndSubFactory implements IOperationFactory {
            GetOperation(): IOperation {
                return new AddAndSub();
            }
        }

        //客户端添加新功能
        operationFactory = new AddAndSubFactory();
        let addAndSub = operationFactory.GetOperation();
        addAndSub.operation(5, 2);
    }

    //抽象工厂
    namespace Factory.c {
        //比较
        interface ICompare {
            compare(num: number): boolean;
        }

        //大于0比较
        class GreaterThanZero implements ICompare {
            compare(num: number): boolean {
                return num > 0;
            }
        }

        // 小于0比较
        class LessThanZero implements ICompare {
            compare(num: number): boolean {
                return num < 0;
            }
        }


        // 抽象工厂
        interface Factory {
            getOperation(): IOperation;

            getCompare(): ICompare;
        }

        class AddAndCompareFactory implements Factory {
            getOperation(): IOperation {
                return new Add();
            }
            getCompare(): ICompare {
                return new GreaterThanZero();
            }
        }

        class SubAndCompareFactory implements Factory {
            getOperation(): IOperation {
                return new Sub();
            }
            getCompare(): ICompare {
                return new LessThanZero();
            }
        }

        let addAndCompareFactory: AddAndCompareFactory = new AddAndCompareFactory();
        let add: IOperation = addAndCompareFactory.getOperation();
        let addRes = add.operation(1, 2);
    }

    //创建模式 1

    //抽象图表接口,抽象产品接口
    interface Chart {
        display(): void;
    }

    //柱状图类：具体产品类
    class HistogramChart implements Chart {
        constructor(){
            console.log('创建柱状图');
        }
        display(): void {
            console.log('显示柱状图');
        }
    }

    //饼状图类：具体产品类
    class PieChart implements Chart{
        constructor(){
            console.log('创建饼状图');
        }
        display(): void {
            console.log('显示饼状图');
        }
    }

    //折线图类：具体产品类
    class LineChart implements Chart{
        constructor(){
            console.log('创建折线图');
        }

        display(): void {
            console.log('显示折线图');
            
        }
    }

    //图表工厂类：工厂类
    class ChartFactory {
        public static getChart(type:string):Chart{
            let chart:Chart = null;
            if(type == "histogram"){
                chart = new HistogramChart();
                console.log('"初始化设置柱状图！"');
            }else if(type == "pie"){
                chart = new PieChart();
                console.log('初始化设置饼状图！');
            }else if(type == "line"){
                chart = new LineChart();
                console.log('初始化设置折线图！');
            }
            return chart;
        }
    }


    //客户端代码
    export class Cline{
        public mian():void{
            let chart:Chart;
            chart = ChartFactory.getChart("pie");
            chart.display();
        }
    }

}
