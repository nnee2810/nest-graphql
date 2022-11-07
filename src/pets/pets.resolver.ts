import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { PublicRoute } from "src/auth/public-route.decorator"
import { CreatePetInput, UpdatePetInput } from "./dto"
import { Pet } from "./entities/pet.entity"
import { PetsService } from "./pets.service"

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Mutation(() => Pet)
  async createPet(
    @Args("createPetInput") createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.create(createPetInput)
  }

  @Query(() => [Pet])
  @PublicRoute()
  async getAllPets(): Promise<Pet[]> {
    return this.petsService.getAll()
  }

  @Mutation(() => Pet)
  async updatePet(
    @Args("updatePetInput") updatePetInput: UpdatePetInput,
  ): Promise<Pet> {
    return this.petsService.update(updatePetInput)
  }
}
