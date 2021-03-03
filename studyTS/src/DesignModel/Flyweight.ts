//享元模式
export namespace Flyweight{
    // 优点：大大减少对象的创建，降低系统的内存，使效率提高。
    // 缺点：提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。
    
    //创建一个接口
    interface Shape{
        draw():void;
    }

    //创建一个实现类
    class Circle implements Shape{
        private color:string;
        private _x:number;
        private _y:number;
        private _r:number;

        constructor(color:string){
            this.color = color;
        }

        public set x(x:number){
            this._x = x;
        }

        public set y(y:number){
            this._y = y;
        }

        public set r(r:number){
            this._r = r;
        }

        draw(): void {
            console.log(`画圆colro:${this.color} x: ${this._x} y:${this._y},r:${this._r}`);
        }

        
    }

    class ShapeFactory {
        private static shapeMap:{[index:string]:Shape} = {};

        public static getCircle(color:string):Shape{
            let circle:Circle = (this.shapeMap[color] as Circle);
            if(circle == null){
                circle = new Circle(color);
                ShapeFactory.shapeMap[color] = circle;
            }
            return circle;
        }
    }

    export class FlyweightDemo{
        private static color:string[] =["Red","Green","Blue","White","Black"];
        public static  main():void{
            for (let i = 0; i < 20; i++) {
                let circle:Circle = ShapeFactory.getCircle(this.getRandomColor()) as Circle;
                circle.x = FlyweightDemo.getRandomX();
                circle.y = FlyweightDemo.getRandomY();
                circle.r = 100;
                circle.draw();
            }
        }

        private static getRandomColor():string{
            return FlyweightDemo.color[Math.floor(Math.random() * this.color.length)]
        }
        
        private static getRandomX():number{
            return Math.floor(Math.random() * 100);
        }

        private static getRandomY():number{
            return Math.floor(Math.random() * 100);
        }

    }


}