export const TYPES = {
   UserRepository: Symbol.for("UserRepository"),
   UserService: Symbol.for("UserService"),
   UserController: Symbol.for("UserController"),
   Database: Symbol.for("Database"),
   Postgres: Symbol.for("Postgres"),
};

export interface IDatabase {
   getConnection(): string;
}
