import { Module } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { PetsResolver } from "./pets.resolver"
import { PetsService } from "./pets.service"

@Module({
  providers: [PetsResolver, PetsService, PrismaService],
})
export class PetsModule {}
