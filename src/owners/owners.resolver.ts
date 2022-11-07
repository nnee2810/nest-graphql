import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { CreateOwnerInput } from "./dto/create-owner.input"
import { Owner } from "./entities/owner.entity"
import { OwnersService } from "./owners.service"

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(() => Owner)
  async createOwner(
    @Args("createOwnerInput") createOwnerInput: CreateOwnerInput,
  ): Promise<Owner> {
    return this.ownersService.create(createOwnerInput)
  }

  @Query(() => [Owner])
  async getAllOwners(): Promise<Owner[]> {
    return this.ownersService.getAll()
  }
}
