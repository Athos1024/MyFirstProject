/**
优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。
缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 */
//外观模式
var Facade;
(function (Facade) {
    var Computer = /** @class */ (function () {
        function Computer() {
        }
        Computer.prototype.on = function () { };
        ;
        Computer.prototype.off = function () { };
        ;
        return Computer;
    }());
    var Light = /** @class */ (function () {
        function Light() {
        }
        Light.prototype.on = function () { };
        ;
        Light.prototype.off = function () { };
        ;
        return Light;
    }());
    var Video = /** @class */ (function () {
        function Video() {
        }
        Video.prototype.play = function () { };
        ;
        Video.prototype.close = function () { };
        ;
        return Video;
    }());
    var HomeTheaterFacade = /** @class */ (function () {
        function HomeTheaterFacade(c, l, v) {
            this._computer = c;
            this._light = l;
            this._video = v;
        }
        HomeTheaterFacade.prototype.watchMovide = function () {
            this._computer.on();
            this._light.on();
            this._video.play();
        };
        HomeTheaterFacade.prototype.stopMovie = function () {
            this._computer.off();
            this._light.off();
            this._video.close();
        };
        return HomeTheaterFacade;
    }());
})(Facade || (Facade = {}));
//# sourceMappingURL=Facade.js.map