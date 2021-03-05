
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
    //简单工厂
    export namespace a {
        /**
        优点： 1、一个调用者想创建一个对象，只要知道其名称就可以了。 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
        缺点：每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
          * 
          */


        //商品接口
        interface IShape {
            draw(): void;
        }

        //产品具体实现类：矩形
        class Rectangle implements IShape {
            draw(): void {
                console.log('画一个矩形');
            }
        }

        //产品具体实现类：方形
        class Square implements IShape {
            draw(): void {
                console.log('画一个方形');
            }
        }

        //形状工厂
        class ShapeFactory {
            public getShape(shapeType: string): IShape {
                let shape: IShape = null;
                if (shapeType == "rectangle") {
                    shape = new Rectangle();
                } else if (shapeType == "square") {
                    shape = new Square();
                }
                return shape;
            }
        }

        export class FactoryDemo {
            public static cline(): void {
                let factory: ShapeFactory = new ShapeFactory();
                let s = factory.getShape("rectangle");
                s.draw();

                s = factory.getShape("square");
                s.draw();
            }
        }

    }

    //抽象工厂
    export namespace b {

        //产品抽象接口
        interface IShape {
            draw(): void;
        }

        //产品实现类:矩形
        class Rectangle implements IShape {
            draw(): void {
                console.log('画一个矩形');
            }
        }

        class Square implements IShape {
            draw(): void {
                console.log('画一个方形');
            }
        }

        //产品抽象接口2
        interface IColor {
            fill(): void;
        }

        //产品实现类：红色
        class Red implements IColor {
            fill(): void {
                console.log('涂满红色');
            }
        }

        //产品实现类：蓝色
        class Bule implements IColor {
            fill(): void {
                console.log('涂满蓝色');
            }
        }

        //为color和shape对象抽类来获取工厂
        abstract class AbstractShape {
            abstract getColor(color: string): IColor;
            abstract getShape(shape: string): IShape;
        }


        //创建一个shape工厂
        class ShapeFactory extends AbstractShape {
            getColor(): IColor {
                return null;
            }
            getShape(shapeType: string): IShape {
                if (shapeType == "square") {
                    return new Square();
                } else if (shapeType == "rectangle") {
                    return new Rectangle();
                }
                return null;
            }
        }

        //创建一个color工厂        
        class ColorFactory extends AbstractShape {
            getColor(color: string): IColor {
                if (color == "red") {
                    return new Red();
                } else if (color == "buld") {
                    return new Bule();
                }
            }
            getShape(shape: string): IShape {
                return null;
            }
        }


        //工厂创建器，来获取工厂
        class FactoryProducer {
            public static getFactory(choice: string): AbstractShape {
                if (choice == "shape") {
                    return new ShapeFactory();
                } else if (choice == "color") {
                    return new ColorFactory();
                }
                return null;
            }
        }

        export class FactoryDemo {
            public static client(): void {
                let sFactory = FactoryProducer.getFactory("shape");
                let s = sFactory.getShape("square");
                s.draw();
            }
        }
    }
}
