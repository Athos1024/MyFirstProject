//原型模式
export namespace prototype {
/**
优点： 1、性能提高。 2、逃避构造函数的约束。
缺点： 1、配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。 2、必须实现 Cloneable 接口。
 */

    //克隆接口
    interface IClone<T>{
        clone():T;
    }

    //动物类实现克隆接口
    class  Animal implements IClone<Animal>{
        public _name:string;
        public _id:number

        clone(): Animal {
            let animal = new Animal();
            animal._name = this._name;
            animal._id = this._id;
            return animal;
        }
    }

    //实现动物类：狗
    class Dog extends Animal {
        constructor(name:string){
            super();
            this._name = name;
        }
    }

    //实现动物类：猫
    class Cat extends Animal {
        constructor(name:string){
            super();
            this._name = name;
        }
    }


    //动物id
    enum AnimalID {
        Cat = 1000,
        Dog = 1001,
    }

    class ProtoType {
        private _animalMap:{[index:number]:Animal} = {};
        constructor(){
            const dog:Dog = new Dog("狗");
            dog._id = AnimalID.Dog;
            const cat:Cat = new Cat("猫");
            cat._id = AnimalID.Cat;
            this._animalMap[AnimalID.Dog] = dog;
            this._animalMap[AnimalID.Cat] = cat;
        }

        public getAnimalID(id:number){
            return this._animalMap[id].clone();
        }
    }

    export class ProtoTypeDemo {
        public static Cline():void{
            let p = new ProtoType();
            let cat =  p.getAnimalID(AnimalID.Cat);
            console.log(cat._id,cat._name);
        }
    }

}