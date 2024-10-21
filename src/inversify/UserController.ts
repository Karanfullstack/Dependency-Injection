import { inject, injectable } from "inversify";
import { IUserService } from "./UserService";
import { TYPES } from "./Types";

@injectable()
export class UserController {
   private userService: IUserService;
   constructor(@inject(TYPES.UserService) userService: IUserService) {
      this.userService = userService;
   }

   public getUserById() {
      const result = this.userService.getUserById("user id xxxx");
      console.log(result);
   }
   public createUser() {
      this.userService.createUser("username:karan, lastname:karanchuhn");
   }
}
