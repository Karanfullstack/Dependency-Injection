import { Bank } from "./Bank";
import { User } from "./User";

class BankService {
   constructor(private bank: Bank) {
      this.bank = bank;
   }
   deposit(userId: string, accNumber: string, amount: number) {
      const user = this.bank.getUserById(userId);
      if (!user) throw new Error("User Not found");
      const userAccount = user.getAccounts();
      userAccount?.deposit(amount);
      console.log(`Deposit of ${amount} made to account ${accNumber}`);
   }
}

const bank = new Bank();
const user = new User("124", "karan");
bank.addUser(user);
bank.createAccount("savings", 100, "124", "2323");
user.getAccounts()
const bankService = new BankService(bank);
bankService.deposit("124", "2323", 100);
console.log(user.getAccounts())