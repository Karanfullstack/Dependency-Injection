import { Accountbase } from "./AccountBase";

export class SavingAccount extends Accountbase {
   private interestRate: number;
   constructor(accountNumber: string, balance: number, interestRate: number) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
   }
   applyInterest(): void {
      this.balance = +this.balance * this.interestRate;
   }
   getAccountType(): string {
      return "Savings";
   }
}

const savingAccount = new SavingAccount("123", 100, 0.2);
