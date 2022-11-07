import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
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
}
