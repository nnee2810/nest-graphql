import { ApolloDriver } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./modules/auth/auth.module"
import { JwtGuard } from "./modules/auth/jwt.guard"
import { OwnersModule } from "./modules/owners/owners.module"
import { PetsModule } from "./modules/pets/pets.module"
import { UsersModule } from "./modules/users/users.module"

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      formatError: (error) => ({
        message: error?.extensions?.response?.message || error?.message,
      }),
    }),
    PetsModule,
    OwnersModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
