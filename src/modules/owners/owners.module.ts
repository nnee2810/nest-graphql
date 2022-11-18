import { Module } from "@nestjs/common"
import { PetsService } from "src/modules/pets/pets.service"
import { PrismaService } from "src/modules/prisma/prisma.service"
import { OwnersResolver } from "./owners.resolver"
import { OwnersService } from "./owners.service"

@Module({
  providers: [OwnersResolver, OwnersService, PetsService, PrismaService],
})
export class OwnersModule {}
