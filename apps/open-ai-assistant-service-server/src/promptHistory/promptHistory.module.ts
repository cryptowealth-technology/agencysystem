import { Module } from "@nestjs/common";
import { PromptHistoryModuleBase } from "./base/promptHistory.module.base";
import { PromptHistoryService } from "./promptHistory.service";
import { PromptHistoryController } from "./promptHistory.controller";
import { PromptHistoryResolver } from "./promptHistory.resolver";

@Module({
  imports: [PromptHistoryModuleBase],
  controllers: [PromptHistoryController],
  providers: [PromptHistoryService, PromptHistoryResolver],
  exports: [PromptHistoryService],
})
export class PromptHistoryModule {}
