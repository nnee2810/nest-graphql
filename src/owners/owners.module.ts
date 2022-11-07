import { Module } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { OwnersResolver } from "./owners.resolver"
import { OwnersService } from "./owners.service"

@Module({
  providers: [OwnersResolver, OwnersService, PrismaService],
})
export class OwnersModule {}
