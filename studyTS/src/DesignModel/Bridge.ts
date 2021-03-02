//桥接模式
export namespace Bridge{
   // 1）适配器：改变已有的两个接口，让他们相容。
   // 2）桥接模式：分离抽象化和实现，使两者的接口可以不同，目的是分离。
    
   /**
    *优点： 1、抽象和实现的分离。 2、优秀的扩展能力。 3、实现细节对客户透明。
    *缺点：桥接模式的引入会增加系统的理解与设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。
    */
   
    //功能接口
    interface DrawAPI{
        drawCircle(radius:number,x:number,y:number):void;
    }

    //实现功能接口：画红圆
    class RedCircle implements DrawAPI {
        drawCircle(radius: number, x: number, y: number): void {
            console.log(`画红圆x：${x}y:${y}`);
        }
    }

    //实现功能接口：画绿圆
    class GreenCircle implements DrawAPI {
        drawCircle(radius: number, x: number, y: number): void {
            console.log(`画绿圆x:${x}y:${y}`);
        }
    }

    //形状抽象类
    abstract class Shape{
        protected drawAPI:DrawAPI;
        constructor(drawAPI:DrawAPI){
            this.drawAPI = drawAPI;
        }
        public abstract draw():void;
    }

    //实现形状抽象类：圆
    class Circle extends Shape{
        
        private x:number;
        private y:number;
        private r:number;
        
        constructor(x:number,y:number,r:number,drawAPI:DrawAPI){
            super(drawAPI);
            this.x = x;
            this.y = y;
            this.r = r;
        }

        public draw(): void {
            this.drawAPI.drawCircle(this.r,this.x,this.y);            
        }
    }


    export class Bridge{
        public static Client(){
            let s:DrawAPI = new GreenCircle();
            let circle:Circle = new Circle(10,20,30,s);
            circle.draw();
        }
    }
}