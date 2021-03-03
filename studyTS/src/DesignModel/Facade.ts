
/**
优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。
缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 */

//外观模式
export namespace Facade {
    interface Shape{
        draw():void;
    }

    class Rectangle implements Shape{
        draw(): void {
            console.log('画矩形');
        }
    }

    class Square implements Shape{
        draw(): void {
            console.log('画方形');
        }
    }

    class ShapeMaker {
        private rect:Shape;
        private square:Shape;

        constructor(){
            this.rect = new Rectangle();
            this.square = new Square();
        }

        public drawRect():void{
            this.rect.draw();
        }

        public drawSquare():void{
            this.square.draw();
        }
    }

    export class FacadeDemo{
        public static Client(){
            let maker = new ShapeMaker();
            maker.drawRect();
        }
    }
}

