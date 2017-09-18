type BankAccountType = {money:number,deposit(value:number):void};

let bankAccount:BankAccountType = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

type myselfType = {name:string,bankAccount:BankAccountType,hobbies:string[]};

let myself:myselfType = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin","Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
