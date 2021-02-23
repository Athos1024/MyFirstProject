//单列模式
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
//# sourceMappingURL=Singleton.js.map