var state;
(function (state) {
    var NoMoneyState = /** @class */ (function () {
        function NoMoneyState(machine) {
            this.machine = machine;
        }
        NoMoneyState.prototype.inserMoney = function () {
            console.log('投币成功');
        };
        NoMoneyState.prototype.backMoney = function () {
            throw new Error("Method not implemented.");
        };
        NoMoneyState.prototype.turnCrank = function () {
            throw new Error("Method not implemented.");
        };
        NoMoneyState.prototype.dispense = function () {
            throw new Error("Method not implemented.");
        };
        return NoMoneyState;
    }());
    var HasMoneyState = /** @class */ (function () {
        function HasMoneyState() {
        }
        HasMoneyState.prototype.inserMoney = function () {
            throw new Error("Method not implemented.");
        };
        HasMoneyState.prototype.backMoney = function () {
            throw new Error("Method not implemented.");
        };
        HasMoneyState.prototype.turnCrank = function () {
            throw new Error("Method not implemented.");
        };
        HasMoneyState.prototype.dispense = function () {
            throw new Error("Method not implemented.");
        };
        return HasMoneyState;
    }());
    var SoldState = /** @class */ (function () {
        function SoldState() {
        }
        SoldState.prototype.inserMoney = function () {
            throw new Error("Method not implemented.");
        };
        SoldState.prototype.backMoney = function () {
            throw new Error("Method not implemented.");
        };
        SoldState.prototype.turnCrank = function () {
            throw new Error("Method not implemented.");
        };
        SoldState.prototype.dispense = function () {
            throw new Error("Method not implemented.");
        };
        return SoldState;
    }());
    var SoldOutState = /** @class */ (function () {
        function SoldOutState() {
        }
        SoldOutState.prototype.inserMoney = function () {
            throw new Error("Method not implemented.");
        };
        SoldOutState.prototype.backMoney = function () {
            throw new Error("Method not implemented.");
        };
        SoldOutState.prototype.turnCrank = function () {
            throw new Error("Method not implemented.");
        };
        SoldOutState.prototype.dispense = function () {
            throw new Error("Method not implemented.");
        };
        return SoldOutState;
    }());
    var WinnerState = /** @class */ (function () {
        function WinnerState() {
        }
        WinnerState.prototype.inserMoney = function () {
            throw new Error("Method not implemented.");
        };
        WinnerState.prototype.backMoney = function () {
            throw new Error("Method not implemented.");
        };
        WinnerState.prototype.turnCrank = function () {
            throw new Error("Method not implemented.");
        };
        WinnerState.prototype.dispense = function () {
            throw new Error("Method not implemented.");
        };
        return WinnerState;
    }());
    var VendingMachine = /** @class */ (function () {
        function VendingMachine(count) {
            this.count = 0;
            this.noMoneyState = new NoMoneyState(this);
            this.hasMoneyState = new HasMoneyState();
            this.soldState = new SoldState();
            this.soldOutState = new SoldOutState();
            this.winnerState = new WinnerState();
            if (count > 0) {
                this.count = count;
                this.currentState = this.noMoneyState;
            }
        }
        return VendingMachine;
    }());
})(state || (state = {}));
//# sourceMappingURL=State.js.map