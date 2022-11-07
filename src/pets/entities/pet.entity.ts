import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Owner } from "src/owners/entities/owner.entity"

@ObjectType()
export class Pet {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field({ nullable: true })
  type?: string

  @Field(() => Owner, { nullable: true })
  owner?: Owner

  @Field(() => Int, { nullable: true })
  ownerId?: number
}
