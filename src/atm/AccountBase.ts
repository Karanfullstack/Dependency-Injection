export abstract class Accountbase {
   protected accountNumber: string;
   protected balance: number;

   constructor(accountNumber: string, balance: number) {
      this.accountNumber = accountNumber;
      this.balance = balance;
   }
   getBalance(): number {
      return this.balance;
   }
   deposit(amount: number): void {
      if (amount <= 0) {
         throw new Error("Amount must be greater than 0");
      }
      this.balance += amount;
   }
   getAccountNumber(): string {
      return this.accountNumber;
   }
   widthraw(amount: number): void {
      if (amount <= 0) throw new Error("Amount must be greater than 0");
      if (amount > this.balance) throw new Error("Insufficient balance");
      this.balance -= amount;
   }
   abstract getAccountType(): string;
}
