import { Container } from "inversify";
import "reflect-metadata";
import { IDatabase, MongoDatabase } from "./MongoDatabase";
import { IUserRepository, UserRepository } from "./UserRepository";
import { IUserService, UserService } from "./UserService";
import { UserController } from "./UserController";
import { TYPES } from "./Types";
import { PostgresDatabase } from "./PostgresDatabse";

const container = new Container();

container.bind<IDatabase>(TYPES.Database).to(PostgresDatabase);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<IUserService>(TYPES.UserService).to(UserService);
container.bind<UserController>(TYPES.UserController).to(UserController);

export { container };
