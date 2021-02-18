var singleton;
(function (singleton) {
    //优点共享资源
    //缺点无法继承
    var Toast = /** @class */ (function () {
        //构造函数私有
        function Toast() {
        }
        ;
        //提供一个静态访问方法
        Toast.getInstance = function () {
            if (!this.instance) {
                Toast.instance = new Toast();
            }
            return Toast.instance;
        };
        return Toast;
    }());
})(singleton || (singleton = {}));
var observer;
(function (observer) {
    var ObjectFor3D = /** @class */ (function () {
        function ObjectFor3D() {
            this.observerList = [];
        }
        ObjectFor3D.prototype.registerObserver = function (o) {
            this.observerList.push(o);
        };
        ObjectFor3D.prototype.removeObservr = function (o) {
            this.observerList.indexOf(o);
        };
        ObjectFor3D.prototype.notifyObserver = function () {
        };
        return ObjectFor3D;
    }());
})(observer || (observer = {}));
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var aList = [];
var a1 = new A();
var a2 = new A();
aList.push(a1);
aList.push(a2);
console.log(aList.indexOf(a1));
//# sourceMappingURL=DesignModel.js.map