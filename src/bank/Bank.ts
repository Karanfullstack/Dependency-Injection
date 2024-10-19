import Account from "./Account";
import { SavingAccount } from "./SavingAccount";
import { User } from "./User";

export class Bank {
   private user: Map<string, User>;
   constructor() {
      this.user = new Map<string, User>();
   }
   addUser(user: User) {
      if (this.user.has(user.getUserId())) {
         throw new Error("User is already exists");
      }
      this.user.set(user.getUserId(), user);
   }
   getUserById(userId: string) {
      return this.user.get(userId);
   }
   createAccount(accType: string, balance: number, userId: string, accNumber: string) {
      const user = this.getUserById(userId);
      if (!user) throw new Error("User not exists");
      let newAccount: Account;
      if (accType === "savings") {
         newAccount = new SavingAccount(balance, accNumber, 0.1);
      } else throw new Error("Only savings account can be opened");

      user.addAccount(newAccount);
      return newAccount;
   }
}
