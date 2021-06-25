//责任链模式
export namespace Chain{
    // 优点： 1、降低耦合度。它将请求的发送者和接收者解耦。 2、简化了对象。使得对象不需要知道链的结构。 3、增强给对象指派职责的灵活性。通过改变链内的成员
    //或者调动它们的次序，允许动态地新增或者删除责任。 4、增加新的请求处理类很方便。
    // 缺点： 1、不能保证请求一定被接收。 2、系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。 3、可能不容易观察运行时的特
    //征，有碍于除错。

    //创建抽象记录器类
    abstract class AbstractLogger{

        public static INFO:number = 1;
        public static DEBUG:number =2;
        public static ERROR:number = 3;

        protected level:number;
        //责任链中的下一个元素
        protected nextLogger:AbstractLogger;

        public setNextLogger(nexLogger:AbstractLogger):void{
            this.nextLogger = nexLogger;
        }

        public logMessage(level:number,message:string):void{
            if(this.level <= level){
                this.write(message);
            }
            if(this.nextLogger != null){
                this.nextLogger.logMessage(level,message);
            }

        }

        protected abstract write(message:string):void;
    }


    //创建扩展了记录器类的实体
    class ConsoleLogger extends AbstractLogger{
        constructor(level:number){
            super();
            this.level = level;
        }

        protected write(message: string): void {
            console.log("Standard console::logger : ",message);
        }
    }

    class ErrorLogger extends AbstractLogger{
        constructor(level:number){
            super();
            this.level = level;
        }

        protected write(message: string): void {
            console.log('Standard error::logger:',message);
        }
    }

    class FileLogger extends AbstractLogger{
        constructor(level:number){
            super();
            this.level = level;
        }

        protected write(message: string): void {
            console.log('Standard file::logger:',message);
        }
    }


    export class ChainDemo{
        private static getChainOfLoggers():AbstractLogger{
            let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
            let fileLogger =  new FileLogger(AbstractLogger.DEBUG);
            let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

            errorLogger.setNextLogger(fileLogger);
            fileLogger.setNextLogger(consoleLogger);
            return errorLogger;
        }

        public static main():void{
            let loggerChain:AbstractLogger = ChainDemo.getChainOfLoggers();

            loggerChain.logMessage(AbstractLogger.INFO,"this is an info" + "\n");
            loggerChain.logMessage(AbstractLogger.DEBUG,"this is an DEBUG"+ "\n");
            loggerChain.logMessage(AbstractLogger.ERROR,"this is an Error"+ "\n");
        }
    }
}