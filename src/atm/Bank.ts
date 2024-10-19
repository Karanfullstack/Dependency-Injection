import { Accountbase } from "./AccountBase";
import { SavingAccount } from "./SavingAccount";
import { User } from "./User";

export class Bank {
   private users: Map<string, User>;
   constructor() {
      this.users = new Map<string, User>();
   }
   addUser(user: User): void {
      if (this.users.has(user.getUserId())) {
         throw new Error("User is already exists");
      }
      this.users.set(user.getUserId(), user);
   }
   getUserById(userId: string): User | undefined {
      return this.users.get(userId);
   }

   createAccount(userId: string, accountType: string, balance: number): Accountbase {
      const user = this.getUserById(userId);
      if (!user) throw new Error("User not exists");
      let newAccount: Accountbase;
      if (accountType === "Savings") {
         newAccount = new SavingAccount(this.generateAccountNumber(), 100, 0.02);
      } else {
         throw new Error("Only Savings Account is opnen");
      }
      return newAccount;
   }

   private generateAccountNumber(): string {
      return Math.random().toString(36).substr(2, 9).toUpperCase();
   }
}
