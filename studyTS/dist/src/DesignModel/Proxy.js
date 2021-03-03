"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy = void 0;
//代理模式
var Proxy;
(function (Proxy) {
    var RealImage = /** @class */ (function () {
        function RealImage(fileName) {
            this._fileName = fileName;
            this.loadFromDisk(fileName);
        }
        RealImage.prototype.display = function () {
            console.log('show', this._fileName);
        };
        RealImage.prototype.loadFromDisk = function (fileNAme) {
            console.log('loading', fileNAme);
        };
        return RealImage;
    }());
    var ProxyImage = /** @class */ (function () {
        function ProxyImage(fileName) {
            this.fileName = fileName;
        }
        ProxyImage.prototype.display = function () {
            if (this._realImage == null) {
                this._realImage = new RealImage(this.fileName);
            }
            this._realImage.display();
        };
        return ProxyImage;
    }());
    var ProxyDemo = /** @class */ (function () {
        function ProxyDemo() {
        }
        ProxyDemo.main = function () {
            var image = new ProxyImage("1111");
            image.display();
            console.log('');
            image.display();
        };
        return ProxyDemo;
    }());
    Proxy.ProxyDemo = ProxyDemo;
})(Proxy = exports.Proxy || (exports.Proxy = {}));
//# sourceMappingURL=Proxy.js.map