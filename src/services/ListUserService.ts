import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer";


class ListUserService {
  async execute() {
    const listUserRepositories = getCustomRepository(UsersRepositories);

    const users = await listUserRepositories.find();
    //console.log(users);
    return classToPlain(users);
  }
}

export { ListUserService }