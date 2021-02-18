//Laya hadle
//apply(this,[]);
//call(this,obj)
var Handler = /** @class */ (function () {
    function Handler(caller, method, args, once) {
        if (caller === void 0) { caller = null; }
        if (method === void 0) { method = null; }
        if (args === void 0) { args = null; }
        if (once === void 0) { once = false; }
        this.once = false;
        this._id = 0;
        this.setTo(caller, method, args, once);
    }
    Handler.prototype.setTo = function (caller, method, args, once) {
        if (once === void 0) { once = false; }
        this._id = Handler._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    };
    Handler.prototype.run = function () {
        if (this.method == null)
            return null;
        var id = this._id;
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    };
    Handler.prototype.runWith = function (data) {
        if (this.method == null) {
            return null;
        }
        var id = this._id;
        var result = null;
        if (data == null)
            result = this.method.apply(this.caller, this.args);
        else if (!this.args && !data.unshift)
            result = this.method.call(this.caller, data);
        else if (this.args)
            result = this.method.apply(this.caller, this.args.concat(data));
        else
            result = this.method.apply(this.caller, data);
        this._id === id && this.once && this.recover();
        return result;
    };
    Handler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    };
    Handler.create = function (caller, method, args, once) {
        var _a;
        if (args === void 0) { args = null; }
        if (once === void 0) { once = true; }
        if (Handler._pool.length) {
            return (_a = Handler._pool.pop()) === null || _a === void 0 ? void 0 : _a.setTo(caller, method, args, once);
        }
        return new Handler(caller, method, args, once);
    };
    Handler.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    };
    Handler._pool = [];
    Handler._gid = 0;
    return Handler;
}());
//# sourceMappingURL=handle.js.map