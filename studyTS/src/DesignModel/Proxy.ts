//代理模式
export namespace Proxy{
/**
优点： 1、职责清晰。 2、高扩展性。 3、智能化。
缺点： 1、由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。 2、实现代理模式需要额外的工作，有些代理模式的实现非常复杂。
 */
//代理模式和装饰器的区别
    interface Image{
        display():void;
    }

    class RealImage implements Image{
        private _fileName:string;
        constructor(fileName:string){
            this._fileName = fileName;
            this.loadFromDisk(fileName);
        }

        display(): void {
            console.log('show',this._fileName);
        }

        private loadFromDisk(fileNAme:string){
            console.log('loading',fileNAme);
        }
    }


    class ProxyImage implements Image{
        private _realImage:RealImage;
        private fileName:string;
        constructor(fileName:string){
            this.fileName = fileName;
        }

        display(): void {
            if(this._realImage == null){
                this._realImage = new RealImage(this.fileName);
            }
            this._realImage.display();
        }


    }


    export class ProxyDemo{
        public static main():void{
            let image:Image = new ProxyImage("1111");
            image.display();
            console.log('');
            image.display();
        }


    }


}