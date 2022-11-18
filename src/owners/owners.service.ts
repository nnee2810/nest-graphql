import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { UpdateOwnerInput } from "./dto"
import { CreateOwnerInput } from "./dto/create-owner.input"
import { Owner } from "./entities/owner.entity"

@Injectable()
export class OwnersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    return this.prismaService.owner.create({
      data: { ...createOwnerInput },
    })
  }

  async getAll(): Promise<Owner[]> {
    return this.prismaService.owner.findMany()
  }

  async getById(id?: number): Promise<Owner> {
    if (!id) return null
    return this.prismaService.owner.findUnique({
      where: {
        id,
      },
    })
  }

  async update(updateOwnerInput: UpdateOwnerInput): Promise<Owner> {
    const { id, ...data } = updateOwnerInput
    return this.prismaService.owner.update({
      where: {
        id,
      },
      data,
    })
  }

  async deleteById(id: number): Promise<Owner> {
    return this.prismaService.owner.delete({ where: { id } })
  }
}
