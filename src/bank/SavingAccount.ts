import Account from "./Account";

export class SavingAccount extends Account {
   constructor(balance: number, accNumber: string, private interestRate: number) {
      super(balance, accNumber);
      this.interestRate = interestRate;
   }
   getAccountType(): string {
      return "Savings";
   }
   applyInterest() {
      this.balance += this.balance * this.interestRate;
   }
}
