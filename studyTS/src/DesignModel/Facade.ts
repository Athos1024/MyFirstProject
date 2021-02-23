
/**
优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。
缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 */

//外观模式
namespace Facade {

    class Computer {
        on() { };
        off() { };
    }
    class Light {
        on() { };
        off() { };
    }
    class Video {
        play() { };
        close() { };
    }

    class HomeTheaterFacade {
        private _computer: Computer;
        private _light: Light;
        private _video: Video;

        constructor(c: Computer, l: Light, v: Video) {
            this._computer = c;
            this._light = l;
            this._video = v;
        }

        public watchMovide(): void {
            this._computer.on();
            this._light.on();
            this._video.play();
        }

        public stopMovie(): void {
            this._computer.off();
            this._light.off();
            this._video.close();
        }
    }
}

