import { Accountbase } from "./AccountBase";

export class User {
   private userId: string;
   private name: string;
   private accounts?: Accountbase[];

   constructor(userId: string, name: string) {
      this.userId = userId;
      this.name = name;
      this.accounts = [];
   }

   addAccount(account: Accountbase): void {
      this.accounts?.push(account);
   }
   getAccounts(): Accountbase[] | [] {
      return this.accounts ?? [];
   }
   getUserId(): string {
      return this.userId;
   }
   getName(): string {
      return this.name;
   }
}
