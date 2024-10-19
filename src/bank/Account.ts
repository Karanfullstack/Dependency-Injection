abstract class Account {
   constructor(protected balance: number, protected accNumber: string) {
      this.accNumber = accNumber;
      this.balance = balance;
   }
   deposit(amount: number) {
      if (amount <= 0) throw new Error("Amount must be greater");
      this.balance += amount;
   }
   widthdraw(amount: number) {
      if (amount > this.balance) throw new Error("Amount must be less than balance");
   }
   getBalance(): number {
      return this.balance;
   }
   abstract getAccountType(): string;
}
export default Account;
