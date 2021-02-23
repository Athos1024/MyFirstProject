/**
优点： 1、封装不变部分，扩展可变部分。 2、提取公共代码，便于维护。 3、行为由父类控制，子类实现。
缺点：每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。
 */
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
//模板模式
var Template;
(function (Template) {
    var Worker = /** @class */ (function () {
        function Worker(name) {
            this._name = name;
        }
        Object.defineProperty(Worker.prototype, "IsNeedPrintDate", {
            get: function () {
                return false;
            },
            enumerable: false,
            configurable: true
        });
        Worker.prototype.workOneDay = function () {
            console.log('--------------work start-----------------');
            this.enterCompany();
            this.computerOn();
            this.computerOff();
            this.exitCompany();
            if (this.IsNeedPrintDate) {
                console.log(new Date().getTime());
            }
            console.log('--------------work end-----------------');
        };
        //关闭电脑
        Worker.prototype.computerOff = function () {
            console.log(this._name + "关闭电脑");
        };
        Worker.prototype.computerOn = function () {
            console.log(this._name + "开启电脑");
        };
        Worker.prototype.enterCompany = function () {
            console.log(this._name + "进入公司");
        };
        Worker.prototype.exitCompany = function () {
            console.log(this._name + "离开公司");
        };
        return Worker;
    }());
    var HRWorker = /** @class */ (function (_super) {
        __extends(HRWorker, _super);
        function HRWorker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(HRWorker.prototype, "IsNeedPrintDate", {
            get: function () {
                return true;
            },
            enumerable: false,
            configurable: true
        });
        HRWorker.prototype.work = function () {
            console.log(this._name + '看简历->打电话->接电话');
        };
        return HRWorker;
    }(Worker));
    var ITWorker = /** @class */ (function (_super) {
        __extends(ITWorker, _super);
        function ITWorker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ITWorker.prototype.work = function () {
            console.log(this._name + "写代码->deBug->fix bug");
        };
        return ITWorker;
    }(Worker));
    var HR = new HRWorker("a君");
    HR.workOneDay();
    var IT = new ITWorker("b君");
    IT.workOneDay();
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map