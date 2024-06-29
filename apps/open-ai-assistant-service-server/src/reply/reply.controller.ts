import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReplyService } from "./reply.service";
import { ReplyControllerBase } from "./base/reply.controller.base";

@swagger.ApiTags("replies")
@common.Controller("replies")
export class ReplyController extends ReplyControllerBase {
  constructor(protected readonly service: ReplyService) {
    super(service);
  }
}
