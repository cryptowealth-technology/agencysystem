import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromptCategoryServiceBase } from "./base/promptCategory.service.base";

@Injectable()
export class PromptCategoryService extends PromptCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
