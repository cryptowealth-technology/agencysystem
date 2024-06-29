import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromptCategoryService } from "./promptCategory.service";
import { PromptCategoryControllerBase } from "./base/promptCategory.controller.base";

@swagger.ApiTags("promptCategories")
@common.Controller("promptCategories")
export class PromptCategoryController extends PromptCategoryControllerBase {
  constructor(protected readonly service: PromptCategoryService) {
    super(service);
  }
}
