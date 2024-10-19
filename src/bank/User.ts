import Account from "./Account";

export class User {
   private account: Account | null;
   constructor(private userId: string, private username: string) {
      this.userId = userId;
      this.username = username;
      this.account = null;
   }
   getAccounts(): Account | null {
      return this.account;
   }
   getUserId() {
      return this.userId;
   }
   getName() {
      return this.username;
   }
   addAccount(account: Account): void {
      this.account = account;
   }
}
