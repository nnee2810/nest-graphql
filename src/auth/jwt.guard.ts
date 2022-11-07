import { ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host"
import { GqlExecutionContext } from "@nestjs/graphql"
import { AuthGuard } from "@nestjs/passport"

@Injectable()
export class JwtGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    const publicRoute = this.reflector.get<boolean>(
      "publicRoute",
      context.getHandler(),
    )
    if (publicRoute) return true
    const { req } = ctx.getContext()
    return super.canActivate(new ExecutionContextHost([req]))
  }
}
