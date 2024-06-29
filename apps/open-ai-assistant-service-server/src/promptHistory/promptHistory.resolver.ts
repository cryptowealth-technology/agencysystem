import * as graphql from "@nestjs/graphql";
import { PromptHistoryResolverBase } from "./base/promptHistory.resolver.base";
import { PromptHistory } from "./base/PromptHistory";
import { PromptHistoryService } from "./promptHistory.service";

@graphql.Resolver(() => PromptHistory)
export class PromptHistoryResolver extends PromptHistoryResolverBase {
  constructor(protected readonly service: PromptHistoryService) {
    super(service);
  }
}
