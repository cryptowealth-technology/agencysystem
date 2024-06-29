import * as graphql from "@nestjs/graphql";
import { OpenAiRequestInputDto } from "../openAi/OpenAiRequestInputDto";
import { OpenAiResponseDto } from "../openAi/OpenAiResponseDto";
import { OpenAiService } from "./openai.service";

export class OpenAiResolver {
  constructor(protected readonly service: OpenAiService) {}

  @graphql.Mutation(() => OpenAiResponseDto)
  async SendOpenAiRequest(
    @graphql.Args()
    args: OpenAiRequestInputDto
  ): Promise<OpenAiResponseDto> {
    return this.service.SendOpenAiRequest(args);
  }
}
