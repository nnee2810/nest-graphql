import { Module } from "@nestjs/common"
import { OwnersService } from "src/modules/owners/owners.service"
import { PrismaService } from "src/modules/prisma/prisma.service"
import { PetsResolver } from "./pets.resolver"
import { PetsService } from "./pets.service"

@Module({
  providers: [PetsResolver, PetsService, PrismaService, OwnersService],
})
export class PetsModule {}
