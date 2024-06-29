import { Module } from "@nestjs/common";
import { PromptCategoryModuleBase } from "./base/promptCategory.module.base";
import { PromptCategoryService } from "./promptCategory.service";
import { PromptCategoryController } from "./promptCategory.controller";
import { PromptCategoryResolver } from "./promptCategory.resolver";

@Module({
  imports: [PromptCategoryModuleBase],
  controllers: [PromptCategoryController],
  providers: [PromptCategoryService, PromptCategoryResolver],
  exports: [PromptCategoryService],
})
export class PromptCategoryModule {}
