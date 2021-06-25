"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
//责任链模式
var Chain;
(function (Chain) {
    // 优点： 1、降低耦合度。它将请求的发送者和接收者解耦。 2、简化了对象。使得对象不需要知道链的结构。 3、增强给对象指派职责的灵活性。通过改变链内的成员
    //或者调动它们的次序，允许动态地新增或者删除责任。 4、增加新的请求处理类很方便。
    // 缺点： 1、不能保证请求一定被接收。 2、系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。 3、可能不容易观察运行时的特
    //征，有碍于除错。
    //创建抽象记录器类
    var AbstractLogger = /** @class */ (function () {
        function AbstractLogger() {
        }
        AbstractLogger.prototype.setNextLogger = function (nexLogger) {
            this.nextLogger = nexLogger;
        };
        AbstractLogger.prototype.logMessage = function (level, message) {
            if (this.level <= level) {
                this.write(message);
            }
            if (this.nextLogger != null) {
                this.nextLogger.logMessage(level, message);
            }
        };
        AbstractLogger.INFO = 1;
        AbstractLogger.DEBUG = 2;
        AbstractLogger.ERROR = 3;
        return AbstractLogger;
    }());
    //创建扩展了记录器类的实体
    var ConsoleLogger = /** @class */ (function (_super) {
        __extends(ConsoleLogger, _super);
        function ConsoleLogger(level) {
            var _this = _super.call(this) || this;
            _this.level = level;
            return _this;
        }
        ConsoleLogger.prototype.write = function (message) {
            console.log("Standard console::logger : ", message);
        };
        return ConsoleLogger;
    }(AbstractLogger));
    var ErrorLogger = /** @class */ (function (_super) {
        __extends(ErrorLogger, _super);
        function ErrorLogger(level) {
            var _this = _super.call(this) || this;
            _this.level = level;
            return _this;
        }
        ErrorLogger.prototype.write = function (message) {
            console.log('Standard error::logger:', message);
        };
        return ErrorLogger;
    }(AbstractLogger));
    var FileLogger = /** @class */ (function (_super) {
        __extends(FileLogger, _super);
        function FileLogger(level) {
            var _this = _super.call(this) || this;
            _this.level = level;
            return _this;
        }
        FileLogger.prototype.write = function (message) {
            console.log('Standard file::logger:', message);
        };
        return FileLogger;
    }(AbstractLogger));
    var ChainDemo = /** @class */ (function () {
        function ChainDemo() {
        }
        ChainDemo.getChainOfLoggers = function () {
            var errorLogger = new ErrorLogger(AbstractLogger.ERROR);
            var fileLogger = new FileLogger(AbstractLogger.DEBUG);
            var consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
            errorLogger.setNextLogger(fileLogger);
            fileLogger.setNextLogger(consoleLogger);
            return errorLogger;
        };
        ChainDemo.main = function () {
            var loggerChain = ChainDemo.getChainOfLoggers();
            loggerChain.logMessage(AbstractLogger.INFO, "this is an info" + "\n");
            loggerChain.logMessage(AbstractLogger.DEBUG, "this is an DEBUG" + "\n");
            loggerChain.logMessage(AbstractLogger.ERROR, "this is an Error" + "\n");
        };
        return ChainDemo;
    }());
    Chain.ChainDemo = ChainDemo;
})(Chain = exports.Chain || (exports.Chain = {}));
//# sourceMappingURL=Chain.js.map