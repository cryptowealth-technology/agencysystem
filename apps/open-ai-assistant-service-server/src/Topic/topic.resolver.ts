import * as graphql from "@nestjs/graphql";
import { TopicService } from "./topic.service";

export class TopicResolver {
  constructor(protected readonly service: TopicService) {}
}
