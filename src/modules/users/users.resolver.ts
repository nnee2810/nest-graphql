import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { CreateUserInput } from "./dto/create-user.input"
import { User } from "./entities/user.entity"
import { UsersService } from "./users.service"

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query(() => User)
  getUserByUsername(@Args("username") username: string) {
    return this.usersService.getByUsername(username)
  }
}
