import { Field, InputType } from "@nestjs/graphql"
import { MinLength } from "class-validator"

@InputType()
export class CreateUserInput {
  @Field()
  @MinLength(6)
  username: string

  @Field()
  @MinLength(6)
  password: string
}
