import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { PrismaService } from "./modules/prisma/prisma.service"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const prismaService = app.get(PrismaService)
  prismaService.enableShutdownHooks(app)

  await app.listen(5000)
}
bootstrap()
