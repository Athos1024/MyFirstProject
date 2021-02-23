declare class Handler {
    once: boolean;
    _id: number;
    caller: any;
    method: any;
    args: any;
    constructor(caller?: any, method?: any, args?: any, once?: boolean);
    setTo(caller: any, method: any, args: any, once?: boolean): this;
    run(): any;
    runWith(data: any): any;
    clear(): this;
    static create(caller: any, method: any, args?: any, once?: boolean): Handler;
    recover(): void;
    static _pool: Handler[];
    static _gid: number;
}
