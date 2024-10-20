import { inject, injectable } from "inversify";
import { IUserRepository } from "./UserRepository";
import { TYPES } from "./Types";

export interface IUserService {
   getUserById(userId: string): string;
   createUser(user: any): void;
}

@injectable()
export class UserService implements IUserService {
   private userRepository: IUserRepository;
   constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository) {
      this.userRepository = userRepository;
   }
   getUserById(userId: string): string {
      return this.userRepository.getUserById(userId);
   }
   createUser(user: any): void {
      this.userRepository.createUser(user);
      console.log("User created successfully");
   }
}
