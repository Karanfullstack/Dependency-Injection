import { Accountbase } from "./AccountBase";

export enum TransactionType {
   Deposit,
   Withdrawal,
   Transfer,
}

export class Transaction {
   private type: TransactionType;
   private amount: number;
   private account: Accountbase;
   constructor(type: TransactionType, amount: number, account: Accountbase) {
      this.account = account;
      this.amount = amount;
      this.type = type;
   }
   execute(): void {
      if (this.type === TransactionType.Deposit) {
         this.account.deposit(this.amount);
      } else if (this.type === TransactionType.Withdrawal) {
         this.account.deposit(this.amount);
      } else throw new Error("Only 2 options are available");
   }
   getTransactionInfo(): string {
      return `${this.type} of ${this.amount} successfully done`;
   }
}
