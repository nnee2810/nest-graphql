import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql"
import { Pet } from "src/modules/pets/entities/pet.entity"
import { PetsService } from "src/modules/pets/pets.service"
import { CreateOwnerInput, UpdateOwnerInput } from "./dto"
import { Owner } from "./entities/owner.entity"
import { OwnersService } from "./owners.service"

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(
    private ownersService: OwnersService,
    private petsService: PetsService,
  ) {}

  @Mutation(() => Owner)
  async createOwner(
    @Args("createOwnerInput") createOwnerInput: CreateOwnerInput,
  ): Promise<Owner> {
    return this.ownersService.create(createOwnerInput)
  }

  @Query(() => [Owner])
  async getOwners(): Promise<Owner[]> {
    return this.ownersService.getAll()
  }

  @Mutation(() => Owner)
  async updateOwner(
    @Args("updateOwnerInput") updateOwnerInput: UpdateOwnerInput,
  ): Promise<Owner> {
    return this.ownersService.update(updateOwnerInput)
  }

  @Mutation(() => Owner)
  async deleteOwner(
    @Args({
      name: "id",
      type: () => Int,
    })
    id: number,
  ): Promise<Owner> {
    return this.ownersService.deleteById(id)
  }

  @ResolveField(() => [Pet])
  async pets(@Parent() owner: Owner): Promise<Pet[]> {
    return this.petsService.getByOwnerId(owner.id)
  }
}
