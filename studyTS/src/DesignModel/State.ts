
// namespace state {

//     interface IState{
//         inserMoney();//放钱
//         backMoney();//退钱
//         turnCrank();//转换曲柄
//         dispense();//出品商
//     }
    
//     class NoMoneyState implements IState{
//         private machine:VendingMachine;
//         constructor(machine:any){
//             this.machine = machine;
//         }

//         inserMoney() {
//             console.log('投币成功');
//         }
//         backMoney() {
//             throw new Error("Method not implemented.");
//         }
//         turnCrank() {
//             throw new Error("Method not implemented.");
//         }
//         dispense() {
//             throw new Error("Method not implemented.");
//         }
//     }

//     class HasMoneyState implements IState{
//         inserMoney() {
//             throw new Error("Method not implemented.");
//         }
//         backMoney() {
//             throw new Error("Method not implemented.");
//         }
//         turnCrank() {
//             throw new Error("Method not implemented.");
//         }
//         dispense() {
//             throw new Error("Method not implemented.");
//         }
//     }

//     class SoldState implements IState{
//         inserMoney() {
//             throw new Error("Method not implemented.");
//         }
//         backMoney() {
//             throw new Error("Method not implemented.");
//         }
//         turnCrank() {
//             throw new Error("Method not implemented.");
//         }
//         dispense() {
//             throw new Error("Method not implemented.");
//         }

//     }

//     class SoldOutState implements IState{
//         inserMoney() {
//             throw new Error("Method not implemented.");
//         }
//         backMoney() {
//             throw new Error("Method not implemented.");
//         }
//         turnCrank() {
//             throw new Error("Method not implemented.");
//         }
//         dispense() {
//             throw new Error("Method not implemented.");
//         }

//     }


//     class WinnerState implements IState{
//         inserMoney() {
//             throw new Error("Method not implemented.");
//         }
//         backMoney() {
//             throw new Error("Method not implemented.");
//         }
//         turnCrank() {
//             throw new Error("Method not implemented.");
//         }
//         dispense() {
//             throw new Error("Method not implemented.");
//         }

//     }


//     class VendingMachine{
//         private noMoneyState:IState;
//         private hasMoneyState:IState;
//         private soldState:IState;
//         private soldOutState:IState;
//         private winnerState:IState;

//         private count:number = 0;
//         private currentState:IState;

//         constructor(count:number){
//             this.noMoneyState = new NoMoneyState(this);
//             this.hasMoneyState = new HasMoneyState();
//             this.soldState = new SoldState();
//             this.soldOutState = new SoldOutState();
//             this.winnerState = new WinnerState();

//             if(count > 0){
//                 this.count = count;
//                 this.currentState = this.noMoneyState;
//             }

//         }


//     }

// }
