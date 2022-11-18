import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersService } from "../users/users.service"
import { SignInInput } from "./dto/sign-in.input"
import { SignInResponse } from "./dto/sign-in.response"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInInput: SignInInput): Promise<SignInResponse> {
    const user = await this.usersService.getByUsername(signInInput.username)
    if (user && user.password === signInInput.password)
      return {
        token: this.jwtService.sign({
          id: user.id,
        }),
        user,
      }
    throw new UnauthorizedException("Username or password incorrect")
  }
}
