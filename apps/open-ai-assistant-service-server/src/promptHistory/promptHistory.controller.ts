import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromptHistoryService } from "./promptHistory.service";
import { PromptHistoryControllerBase } from "./base/promptHistory.controller.base";

@swagger.ApiTags("promptHistories")
@common.Controller("promptHistories")
export class PromptHistoryController extends PromptHistoryControllerBase {
  constructor(protected readonly service: PromptHistoryService) {
    super(service);
  }
}
