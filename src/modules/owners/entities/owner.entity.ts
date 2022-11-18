import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Pet } from "src/modules/pets/entities/pet.entity"

@ObjectType()
export class Owner {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field(() => [Pet], { nullable: true })
  pets?: Pet[]
}
