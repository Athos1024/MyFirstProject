// �˻��м���״̬��������͸֧������

// ״̬������
abstract class State {
    private name: string;
    protected acc: Account;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    abstract deposit(amount: number);
    abstract withdraw(amount: number);
    abstract computeInterest();
    abstract stateCheck();
}

// ����״̬��
class NormalState extends State {
    acc: Account;
    constructor(acc: Account) {
        super('����');
        this.acc = acc;
    }
    deposit(amount: number) {
        this.acc.setBalance(this.acc.getBalance() + amount);
        this.stateCheck();
    }
    withdraw(amount: number) {
        this.acc.setBalance(this.acc.getBalance() - amount);
        this.stateCheck();
    }
    computeInterest() {
        console.log('����״̬������֧����Ϣ');
    }
    // ״̬ת��
    stateCheck() {
        if (this.acc.getBalance() > -2000 && this.acc.getBalance() <= 0) {
            this.acc.setState(new OverdraftState(this.acc));
        } else if (this.acc.getBalance() == -2000) {
            this.acc.setState(new RestrictedState(this.acc));
        } else if (this.acc.getBalance() < -2000) {
            console.log('��������');
        }
    }
}

// ͸֧״̬
class OverdraftState extends State {
    acc: Account;
    constructor(acc: Account) {
        super('͸֧');
        this.acc = acc;
    }
    deposit(amount: number) {
        this.acc.setBalance(this.acc.getBalance() + amount);
        this.stateCheck();
    }
    withdraw(amount: number) {
        this.acc.setBalance(this.acc.getBalance() - amount);
        this.stateCheck();
    }
    computeInterest() {
        console.log('������Ϣ');
    }
    // ״̬ת��
    stateCheck() {
        if (this.acc.getBalance() > 0) {
            this.acc.setState(new NormalState(this.acc));
        } else if (this.acc.getBalance() == -2000) {
            this.acc.setState(new RestrictedState(this.acc));
        } else if (this.acc.getBalance() < -2000) {
            console.log('��������');
        }
    }
}

// ����״̬
class RestrictedState extends State {
    acc: Account;
    constructor(acc: Account) {
        super('����');
        this.acc = acc;
    }
    deposit(amount: number) {
        this.acc.setBalance(this.acc.getBalance() + amount);
        this.stateCheck();
    }
    withdraw(ammount: number) {
        console.log('�˺����ޣ�ȡ��ʧ��');
    }
    computeInterest() {
        console.log('������Ϣ');
    }
    // ״̬ת��
    stateCheck() {
        if (this.acc.getBalance() > 0) {
            this.acc.setState(new NormalState(this.acc));
        } else if (this.acc.getBalance() > -2000) {
            this.acc.setState(new OverdraftState(this.acc));
        }
    }
}

// �˻��࣬����״̬ģʽ�еĻ���
class Account {
    private name: string;
    private state: State;
    // ���
    private balance = 0;
    // ��ʼʱΪ����״̬
    constructor(name: string) {
        this.name = name;
        this.state = new NormalState(this);
        console.log(`�û� ${this.name} ���������Ϊ ${this.balance}`);
        console.log('--------');
    }
    getBalance(): number {
        return this.balance;
    }
    setBalance(balance: number) {
        this.balance = balance;
    }
    setState(state: State) {
        this.state = state;
    }
    // ���
    deposit(amount: number) {
        this.state.deposit(amount);
        console.log(`��� ${amount}`);
        console.log(`���Ϊ ${this.balance}`);
        console.log(`�˻�״̬Ϊ ${this.state.getName()}`);
        console.log('--------');
    }
    // ȡ��
    withdraw(amount: number) {
        this.state.withdraw(amount);
        console.log(`ȡ�� ${amount}`);
        console.log(`���Ϊ ${this.balance}`);
        console.log(`�˻�״̬Ϊ ${this.state.getName()}`);
        console.log('--------');
    }
    // ������Ϣ
    computeInterest() {
        this.state.computeInterest();
    }
}

class Client {
    public static main(): void {
        const acc = new Account('Bob');
        acc.deposit(1000);
        acc.withdraw(2000);
        acc.deposit(3000);
        acc.withdraw(4000);
        acc.withdraw(1000);
        acc.computeInterest();
    }
}
Client.main()

// �û� Bob ���������Ϊ 0
// --------
// ��� 1000
// ���Ϊ 1000
// �˻�״̬Ϊ ����
// --------
// ȡ�� 2000
// ���Ϊ -1000
// �˻�״̬Ϊ ͸֧
// --------
// ��� 3000
// ���Ϊ 2000
// �˻�״̬Ϊ ����
// --------
// ȡ�� 4000
// ���Ϊ -2000
// �˻�״̬Ϊ ����
// --------
// �˺����ޣ�ȡ��ʧ��
// ȡ�� 1000
// ���Ϊ -2000
// �˻�״̬Ϊ ����
// --------
// ������Ϣ