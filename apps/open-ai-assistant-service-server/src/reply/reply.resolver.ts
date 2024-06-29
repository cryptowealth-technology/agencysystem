import * as graphql from "@nestjs/graphql";
import { ReplyResolverBase } from "./base/reply.resolver.base";
import { Reply } from "./base/Reply";
import { ReplyService } from "./reply.service";

@graphql.Resolver(() => Reply)
export class ReplyResolver extends ReplyResolverBase {
  constructor(protected readonly service: ReplyService) {
    super(service);
  }
}
