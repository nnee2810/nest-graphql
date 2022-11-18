import { Field, InputType } from "@nestjs/graphql"
import { IsString, MinLength } from "class-validator"

@InputType()
export class CreateOwnerInput {
  @Field()
  @IsString()
  @MinLength(1)
  name: string
}
