import { Module } from "@nestjs/common"
import { OwnersService } from "src/owners/owners.service"
import { PrismaService } from "src/prisma/prisma.service"
import { PetsResolver } from "./pets.resolver"
import { PetsService } from "./pets.service"

@Module({
  providers: [PetsResolver, PetsService, PrismaService, OwnersService],
})
export class PetsModule {}
