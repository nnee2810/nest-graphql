import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { AuthService } from "./auth.service"
import { SignInInput } from "./dto/sign-in.input"
import { SignInResponse } from "./dto/sign-in.response"
import { PublicRoute } from "./public-route.decorator"

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInResponse)
  @PublicRoute()
  signIn(@Args("signInInput") signInInput: SignInInput) {
    return this.authService.signIn(signInInput)
  }
}
