/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReplyService } from "../reply.service";
import { ReplyCreateInput } from "./ReplyCreateInput";
import { Reply } from "./Reply";
import { ReplyFindManyArgs } from "./ReplyFindManyArgs";
import { ReplyWhereUniqueInput } from "./ReplyWhereUniqueInput";
import { ReplyUpdateInput } from "./ReplyUpdateInput";

export class ReplyControllerBase {
  constructor(protected readonly service: ReplyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reply })
  async createReply(@common.Body() data: ReplyCreateInput): Promise<Reply> {
    return await this.service.createReply({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Reply] })
  @ApiNestedQuery(ReplyFindManyArgs)
  async replies(@common.Req() request: Request): Promise<Reply[]> {
    const args = plainToClass(ReplyFindManyArgs, request.query);
    return this.service.replies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reply(
    @common.Param() params: ReplyWhereUniqueInput
  ): Promise<Reply | null> {
    const result = await this.service.reply({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReply(
    @common.Param() params: ReplyWhereUniqueInput,
    @common.Body() data: ReplyUpdateInput
  ): Promise<Reply | null> {
    try {
      return await this.service.updateReply({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReply(
    @common.Param() params: ReplyWhereUniqueInput
  ): Promise<Reply | null> {
    try {
      return await this.service.deleteReply({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
