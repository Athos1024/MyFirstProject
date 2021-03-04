namespace Iterator{

    interface Iterator{
        next():any;
        hasNext():boolean;
    }

    interface Aggregator{
        createIterator():Iterator;
    }

    class ConcreteIterator implements Iterator{
        
        private conllection:any[] = [];
        private position:number = 0;
        constructor(collection:any[]){
            this.conllection = collection;
        }
        
        next() {
            
        }
        hasNext(): boolean {
            throw new Error("Method not implemented.");
        }

    }


}