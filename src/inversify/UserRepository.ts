import { inject, injectable } from "inversify";
import { IDatabase } from "./MongoDatabase";
import { TYPES } from "./Types";

export interface IUserRepository {
   getUserById(userId: string): string;
   createUser(user: any): void;
}

@injectable()
export class UserRepository implements IUserRepository {
   private db: IDatabase;

   constructor(@inject(TYPES.Postgres) db: IDatabase) {
      this.db = db;
   }
   getUserById(userId: string): string {
      const connection = this.db.getConnection();
      return `User with id ${userId} found in ${connection}`;
   }
   createUser(user: any): void {
      const connection = this.db.getConnection();
      console.log(`User ${user} created in ${connection}`);
   }
}
