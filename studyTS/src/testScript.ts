class Book{
    constructor(private name:string){
        
    }

    public getName():string{
        return this.name;
    }
}

interface Iterator{
    next():any;
    hasNext():boolean
}

interface Aggregate{
    iterator():Iterator;
}

