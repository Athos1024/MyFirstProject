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
exports.NullObject = void 0;
var NullObject;
(function (NullObject) {
    var AbstractCustomer = /** @class */ (function () {
        function AbstractCustomer() {
        }
        return AbstractCustomer;
    }());
    var RealCustomer = /** @class */ (function (_super) {
        __extends(RealCustomer, _super);
        function RealCustomer(name) {
            var _this = _super.call(this) || this;
            _this.name = name;
            return _this;
        }
        RealCustomer.prototype.isNil = function () {
            return false;
        };
        RealCustomer.prototype.getName = function () {
            return this.name;
        };
        return RealCustomer;
    }(AbstractCustomer));
    var NullCustomer = /** @class */ (function (_super) {
        __extends(NullCustomer, _super);
        function NullCustomer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NullCustomer.prototype.isNil = function () {
            return true;
        };
        NullCustomer.prototype.getName = function () {
            return "Not available in customer database;";
        };
        return NullCustomer;
    }(AbstractCustomer));
    var CustomerFactory = /** @class */ (function () {
        function CustomerFactory() {
        }
        CustomerFactory.getCustomer = function (name) {
            for (var i = 0; i < this.nameArr.length; i++) {
                var element = this.nameArr[i];
                if (this.nameArr[i] == name) {
                    return new RealCustomer(name);
                }
            }
            return new NullCustomer();
        };
        CustomerFactory.nameArr = ["A", "B", "C"];
        return CustomerFactory;
    }());
    var NullDemo = /** @class */ (function () {
        function NullDemo() {
        }
        NullDemo.main = function () {
            var customer1 = CustomerFactory.getCustomer("A");
            var customer2 = CustomerFactory.getCustomer("B");
            var customer3 = CustomerFactory.getCustomer("C");
            var customer4 = CustomerFactory.getCustomer("D");
            console.log('=================');
            console.log(customer1.getName());
            console.log(customer2.getName());
            console.log(customer3.getName());
            console.log(customer4.getName());
        };
        return NullDemo;
    }());
    NullObject.NullDemo = NullDemo;
})(NullObject = exports.NullObject || (exports.NullObject = {}));
//# sourceMappingURL=NullObject.js.map