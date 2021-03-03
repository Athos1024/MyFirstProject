
/**
优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
缺点：多层装饰比较复杂。
 */
//装饰器
export namespace decorator {
    //形状接口
    interface Shape{
        draw():void;
    }

    //形状实现类 矩形
    class Rectangle implements Shape{
        draw(): void {
            console.log('形状  矩形');
        }

    }

    //形状实现类 圆形
    class Circle implements Shape{
        draw(): void {
            console.log('形状 圆形');
        }
    }

    //抽象装饰器
    abstract class ShapeDecorator implements Shape{
        protected decoratorShape:Shape;
        constructor(shape:Shape){
            this.decoratorShape = shape;
        }

        draw(): void {
            this.decoratorShape.draw();
        }
    }

    //实现装饰器
    class RedShapeDecorator extends ShapeDecorator{
        constructor(shape:Shape){
            super(shape);
        }

        draw():void{
            this.decoratorShape.draw();
            this.setRedBorder(this.decoratorShape);
        }

        private setRedBorder(decorteShape:Shape):void{
            console.log('border color red');
        }
    }

    export class DecoratorDemo{
        public static client():void{
            let circle = new Circle();
            let redCircle = new RedShapeDecorator(new Circle());

            
            circle.draw();
            console.log('===============');
            redCircle.draw();
        }
    }


}

