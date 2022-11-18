import { Field, InputType, Int } from "@nestjs/graphql"
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator"

@InputType()
export class CreatePetInput {
  @Field()
  @IsString()
  @MinLength(1)
  name: string

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  ownerId?: number
}
