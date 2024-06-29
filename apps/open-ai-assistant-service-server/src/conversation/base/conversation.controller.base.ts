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
import { ConversationService } from "../conversation.service";
import { ConversationCreateInput } from "./ConversationCreateInput";
import { Conversation } from "./Conversation";
import { ConversationFindManyArgs } from "./ConversationFindManyArgs";
import { ConversationWhereUniqueInput } from "./ConversationWhereUniqueInput";
import { ConversationUpdateInput } from "./ConversationUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";

export class ConversationControllerBase {
  constructor(protected readonly service: ConversationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Conversation })
  async createConversation(
    @common.Body() data: ConversationCreateInput
  ): Promise<Conversation> {
    return await this.service.createConversation({
      data: {
        ...data,

        message: data.message
          ? {
              connect: data.message,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        responder: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Conversation] })
  @ApiNestedQuery(ConversationFindManyArgs)
  async conversations(@common.Req() request: Request): Promise<Conversation[]> {
    const args = plainToClass(ConversationFindManyArgs, request.query);
    return this.service.conversations({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        responder: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async conversation(
    @common.Param() params: ConversationWhereUniqueInput
  ): Promise<Conversation | null> {
    const result = await this.service.conversation({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        responder: true,
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
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConversation(
    @common.Param() params: ConversationWhereUniqueInput,
    @common.Body() data: ConversationUpdateInput
  ): Promise<Conversation | null> {
    try {
      return await this.service.updateConversation({
        where: params,
        data: {
          ...data,

          message: data.message
            ? {
                connect: data.message,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          responder: true,
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
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConversation(
    @common.Param() params: ConversationWhereUniqueInput
  ): Promise<Conversation | null> {
    try {
      return await this.service.deleteConversation({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          responder: true,
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

  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: ConversationWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        content: true,

        conversation: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        sender: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  async connectMessages(
    @common.Param() params: ConversationWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updateConversation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  async updateMessages(
    @common.Param() params: ConversationWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updateConversation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  async disconnectMessages(
    @common.Param() params: ConversationWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updateConversation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
