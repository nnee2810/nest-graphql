import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { AuthService } from "./auth.service"
import { SignInInput } from "./dto/sign-in.input"
import { SignInResponse } from "./dto/sign-in.response"

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInResponse)
  signIn(@Args("signInInput") signInInput: SignInInput) {
    return this.authService.signIn(signInInput)
  }
}
