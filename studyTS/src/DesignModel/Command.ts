
/**
优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。
缺点：使用命令模式可能会导致某些系统有过多的具体命令类。
 */
//命令模式
namespace Command {
    //门
    class Door {
        public Open() {
            console.log('开门');
        }

        public Close() {
            console.log("关门")
        }
    }

    //灯
    class Light {
        public on(): void {
            console.log('开灯');
        }

        public off(): void {
            console.log('关灯');
        }
    }

    interface Command {
        Excute(): void;
    }

    //关灯命令
    class LightOffCommond implements Command {
        private light: Light;
        constructor(light: Light) {
            this.light = light;
        }

        Excute(): void {
            this.light.off();
        }
    }

    //开灯命令
    class LightOnCommond implements Command {
        private light: Light;
        constructor(light: Light) {
            this.light = light;
        }

        Excute(): void {
            this.light.on();
        }
    }

    class NoCommand implements Command {
        Excute(): void {

        }
    }

    class ControlPanel {
        private readonly CONTROL_SIZE: number = 9;
        private commandList: Command[];

        constructor() {
            this.commandList = [];
            for (let i = 0; i < this.CONTROL_SIZE; i++) {
                this.commandList.push(new NoCommand())
            }
        }

        //设置按钮
        public setCommand(index: number, command: Command) {
            this.commandList[index] = command;
        }

        //点击按钮
        public keyPressed(index: number) {
            this.commandList[index].Excute();
        }
    }


    let control = new ControlPanel();
    let light = new Light();
    control.setCommand(0, new LightOffCommond(light));
    control.setCommand(1, new LightOnCommond(light));

    control.keyPressed(0);
    control.keyPressed(1);

    control.keyPressed(3);

    //定义一个命令，可以用于一系列的事情
    class QueueCommand implements Command {
        private commandList: Command[];
        constructor(commandList: Command[]) {
            this.commandList = commandList;
        }

        Excute(): void {
            for (let i = 0; i < this.commandList.length; i++) {
                const element = this.commandList[i];
                element.Excute();
            }
        }
    }


    let queuqCommand = new QueueCommand([new LightOffCommond(light), new LightOnCommond(light)]);
    queuqCommand.Excute();
}
