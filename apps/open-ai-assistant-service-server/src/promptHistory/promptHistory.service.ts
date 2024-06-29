import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromptHistoryServiceBase } from "./base/promptHistory.service.base";

@Injectable()
export class PromptHistoryService extends PromptHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
