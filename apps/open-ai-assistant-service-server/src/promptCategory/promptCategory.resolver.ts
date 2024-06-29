import * as graphql from "@nestjs/graphql";
import { PromptCategoryResolverBase } from "./base/promptCategory.resolver.base";
import { PromptCategory } from "./base/PromptCategory";
import { PromptCategoryService } from "./promptCategory.service";

@graphql.Resolver(() => PromptCategory)
export class PromptCategoryResolver extends PromptCategoryResolverBase {
  constructor(protected readonly service: PromptCategoryService) {
    super(service);
  }
}
