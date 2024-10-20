import { container } from "./inversify.config";
import { TYPES } from "./Types";
import { UserController } from "./UserController";

const user = container.get<UserController>(TYPES.UserController);
user.getUserById();
user.createUser();
