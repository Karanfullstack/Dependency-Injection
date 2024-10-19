import { Bank } from "./Bank";
import { User } from "./User";

class BankManager {
   private bank: Bank;
   constructor(bank: Bank) {
      this.bank = bank;
   }

   deposit(userId: string, accountNumber: string, amount: number): void {
      const user = this.bank.getUserById(userId);

      if (!user) throw new Error("User not found");

      const account = user
         .getAccounts()
         .find((account) => account.getAccountNumber() === accountNumber);
      account?.deposit(amount);
      console.log(`Deposit of amount ${amount} to ${accountNumber}`);
   }
   widthraw(userID: string, accountNumber: string, amount: number): void {
      const user = this.bank.getUserById(userID);

      if (!user) throw new Error("User not found");

      const accounts = user.getAccounts();
      if (!accounts) throw new Error("User has no accounts");

      const account = user
         .getAccounts()
         .find((account) => account.getAccountNumber() === accountNumber);
      account?.widthraw(amount);
      console.log(`Withdrawal of ${amount} made from account ${accountNumber}`);
   }
   transfer(userId: string, from: string, to: string, amount: number) {
      const user = this.bank.getUserById(userId);
      if (!user) throw new Error("User not exists");
      const sourceAccount = user.getAccounts().find((acc) => acc.getAccountNumber() === from);
      const destiNationAccount = user.getAccounts().find((acc) => acc.getAccountNumber() === to);
      sourceAccount?.widthraw(amount);
      destiNationAccount?.deposit(amount);
      console.log(`Transferred ${amount} from account ${from} to ${to}`);
   }
}

const bank = new Bank();
const user = new User("123", "karan");

bank.addUser(user);
const savingAccount = bank.createAccount("123", "Savings", 1000);
const bankManager = new BankManager(bank);
bankManager.deposit("123", savingAccount.getAccountNumber(), 500);
const result = user.getAccounts()
console.log(result);
