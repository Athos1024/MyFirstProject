//Laya hadle
//apply(this,[]);
//call(this,obj)

class Handler {
    public once: boolean;
    public _id: number;
    public caller;
    public method;
    public args;

    constructor(caller = null, method = null, args = null, once = false) {
        this.once = false;
        this._id = 0;
        this.setTo(caller,method,args,once)
    }

    public setTo(caller, method, args, once = false) {
        this._id = Handler._gid++
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    }

    public run(){
        if(this.method == null) 
            return null;
        let id = this._id;
        let result = this.method.apply(this.caller,this.args);
        this._id === id && this.once  && this.recover();
        return result;
    }
    
    public runWith(data){
        if(this.method == null){
            return null;
        }
        let id = this._id;
        let result =null;
        if(data == null)
            result = this.method.apply(this.caller,this.args);
        else if(!this.args && !data.unshift)
            result = this.method.call(this.caller,data);
        else if(this.args)
            result = this.method.apply(this.caller,this.args.concat(data));
        else
            result = this.method.apply(this.caller,data);
        this._id === id && this.once && this.recover();
        return result;
    }
    
    public clear(){
        this.caller = null;
        this.method =null;
        this.args = null;
        return this;
    }

    static create(caller,method,args = null,once =true){
        if(Handler._pool.length){
            return Handler._pool.pop()?.setTo(caller,method,args,once);
        }
        return new Handler(caller,method,args,once);
    }

    public recover(){
        if(this._id > 0){
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    }
    static _pool:Handler[] = [];
    static _gid:number = 0;
}