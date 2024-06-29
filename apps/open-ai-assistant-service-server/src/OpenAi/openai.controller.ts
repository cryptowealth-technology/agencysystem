import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OpenAiService } from "./openai.service";
import { OpenAiRequestInputDto } from "../openAi/OpenAiRequestInputDto";
import { OpenAiResponseDto } from "../openAi/OpenAiResponseDto";

@swagger.ApiTags("openAis")
@common.Controller("openAis")
export class OpenAiController {
  constructor(protected readonly service: OpenAiService) {}

  @common.Post("/openai-request")
  @swagger.ApiOkResponse({
    type: OpenAiResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendOpenAiRequest(
    @common.Body()
    body: OpenAiRequestInputDto
  ): Promise<OpenAiResponseDto> {
        return this.service.SendOpenAiRequest(body);
      }
}
