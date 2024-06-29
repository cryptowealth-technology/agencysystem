import { Module } from "@nestjs/common";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { TopicResolver } from "./topic.resolver";

@Module({
  controllers: [TopicController],
  providers: [TopicService, TopicResolver],
  exports: [TopicService],
})
export class TopicModule {}
