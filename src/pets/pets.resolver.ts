import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql"
import { Owner } from "src/owners/entities/owner.entity"
import { OwnersService } from "src/owners/owners.service"
import { CreatePetInput, UpdatePetInput } from "./dto"
import { Pet } from "./entities/pet.entity"
import { PetsService } from "./pets.service"

@Resolver(() => Pet)
export class PetsResolver {
  constructor(
    private petsService: PetsService,
    private ownersService: OwnersService,
  ) {}

  @Mutation(() => Pet)
  async createPet(
    @Args("createPetInput") createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.create(createPetInput)
  }

  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return this.petsService.getAll()
  }

  @Mutation(() => Pet)
  async updatePet(
    @Args("updatePetInput") updatePetInput: UpdatePetInput,
  ): Promise<Pet> {
    return this.petsService.update(updatePetInput)
  }

  @Mutation(() => Pet)
  async deletePet(
    @Args({
      name: "id",
      type: () => Int,
    })
    id: number,
  ): Promise<Pet> {
    return this.petsService.deleteById(id)
  }

  @ResolveField(() => Owner)
  async owner(@Parent() pet: Pet): Promise<Owner> {
    return this.ownersService.getById(pet.ownerId)
  }
}
