import { injectable } from "inversify";
import { IDatabase } from "./Types";

@injectable()
export class PostgresDatabase implements IDatabase {
   getConnection(): string {
      return "Databse connection with postgres";
   }
}
