export const TYPES = {
   UserRepository: Symbol.for("UserRepository"),
   UserService: Symbol.for("UserService"),
   UserController: Symbol.for("UserController"),
   Database: Symbol.for("Database"),
};

export interface IDatabase {
   getConnection(): string;
}
