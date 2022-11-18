import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { UsersModule } from "src/users/users.module"
import { AuthResolver } from "./auth.resolver"
import { AuthService } from "./auth.service"
import { JwtStrategy } from "./jwt.strategy"

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      signOptions: {
        expiresIn: "1d",
      },
      secret: "secret",
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
