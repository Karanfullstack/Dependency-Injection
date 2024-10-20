import { injectable } from "inversify";

export interface IDatabase {
   getConnection(): string;
}

@injectable()
export class MongoDatabase implements IDatabase {
   getConnection(): string {
      return "Databse connection";
   }
}
