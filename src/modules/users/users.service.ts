import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/modules/prisma/prisma.service"
import { CreateUserInput } from "./dto/create-user.input"

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({ data: createUserInput })
  }

  getById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    })
  }

  getByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username,
      },
    })
  }
}
