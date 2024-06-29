import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TopicService } from "./topic.service";

@swagger.ApiTags("topics")
@common.Controller("topics")
export class TopicController {
  constructor(protected readonly service: TopicService) {}
}
