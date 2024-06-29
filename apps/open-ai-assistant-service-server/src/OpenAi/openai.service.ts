import { Injectable } from "@nestjs/common";
import { OpenAiRequestInputDto } from "../openAi/OpenAiRequestInputDto";
import { OpenAiResponseDto } from "../openAi/OpenAiResponseDto";

@Injectable()
export class OpenAiService {
  constructor() {}
  async SendOpenAiRequest(args: OpenAiRequestInputDto): Promise<OpenAiResponseDto> {
    throw new Error("Not implemented");
  }
}
