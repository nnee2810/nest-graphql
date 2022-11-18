import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/modules/prisma/prisma.service"
import { CreatePetInput, UpdatePetInput } from "./dto"
import { Pet } from "./entities/pet.entity"

@Injectable()
export class PetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    return this.prismaService.pet.create({ data: createPetInput })
  }

  async getAll(): Promise<Pet[]> {
    return this.prismaService.pet.findMany()
  }

  async getByOwnerId(ownerId: number): Promise<Pet[]> {
    return this.prismaService.pet.findMany({
      where: { ownerId },
    })
  }

  async update(updatePetInput: UpdatePetInput): Promise<Pet> {
    const { id, ...data } = updatePetInput
    return this.prismaService.pet.update({
      data,
      where: {
        id,
      },
    })
  }

  async deleteById(id: number): Promise<Pet> {
    return this.prismaService.pet.delete({ where: { id } })
  }
}
