/**
优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。
缺点：使用命令模式可能会导致某些系统有过多的具体命令类。
 */
//命令模式
var Command;
(function (Command) {
    //门
    var Door = /** @class */ (function () {
        function Door() {
        }
        Door.prototype.Open = function () {
            console.log('开门');
        };
        Door.prototype.Close = function () {
            console.log("关门");
        };
        return Door;
    }());
    //灯
    var Light = /** @class */ (function () {
        function Light() {
        }
        Light.prototype.on = function () {
            console.log('开灯');
        };
        Light.prototype.off = function () {
            console.log('关灯');
        };
        return Light;
    }());
    //关灯命令
    var LightOffCommond = /** @class */ (function () {
        function LightOffCommond(light) {
            this.light = light;
        }
        LightOffCommond.prototype.Excute = function () {
            this.light.off();
        };
        return LightOffCommond;
    }());
    //开灯命令
    var LightOnCommond = /** @class */ (function () {
        function LightOnCommond(light) {
            this.light = light;
        }
        LightOnCommond.prototype.Excute = function () {
            this.light.on();
        };
        return LightOnCommond;
    }());
    var NoCommand = /** @class */ (function () {
        function NoCommand() {
        }
        NoCommand.prototype.Excute = function () {
        };
        return NoCommand;
    }());
    var ControlPanel = /** @class */ (function () {
        function ControlPanel() {
            this.CONTROL_SIZE = 9;
            this.commandList = [];
            for (var i = 0; i < this.CONTROL_SIZE; i++) {
                this.commandList.push(new NoCommand());
            }
        }
        //设置按钮
        ControlPanel.prototype.setCommand = function (index, command) {
            this.commandList[index] = command;
        };
        //点击按钮
        ControlPanel.prototype.keyPressed = function (index) {
            this.commandList[index].Excute();
        };
        return ControlPanel;
    }());
    var control = new ControlPanel();
    var light = new Light();
    control.setCommand(0, new LightOffCommond(light));
    control.setCommand(1, new LightOnCommond(light));
    control.keyPressed(0);
    control.keyPressed(1);
    control.keyPressed(3);
    //定义一个命令，可以用于一系列的事情
    var QueueCommand = /** @class */ (function () {
        function QueueCommand(commandList) {
            this.commandList = commandList;
        }
        QueueCommand.prototype.Excute = function () {
            for (var i = 0; i < this.commandList.length; i++) {
                var element = this.commandList[i];
                element.Excute();
            }
        };
        return QueueCommand;
    }());
    var queuqCommand = new QueueCommand([new LightOffCommond(light), new LightOnCommond(light)]);
    queuqCommand.Excute();
})(Command || (Command = {}));
//# sourceMappingURL=Command.js.map