import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { CreatePetInput, UpdatePetInput } from "./dto"
import { Pet } from "./entities/pet.entity"

@Injectable()
export class PetsService {
  constructor(private prismService: PrismaService) {}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    return this.prismService.pet.create({ data: createPetInput })
  }

  async getAll(): Promise<Pet[]> {
    return this.prismService.pet.findMany({
      include: {
        owner: true,
      },
    })
  }

  async update(updatePetInput: UpdatePetInput): Promise<Pet> {
    const { id, ...data } = updatePetInput
    return this.prismService.pet.update({
      data,
      where: {
        id,
      },
    })
  }
}
