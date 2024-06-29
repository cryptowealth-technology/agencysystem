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
import { PromptCategoryService } from "../promptCategory.service";
import { PromptCategoryCreateInput } from "./PromptCategoryCreateInput";
import { PromptCategory } from "./PromptCategory";
import { PromptCategoryFindManyArgs } from "./PromptCategoryFindManyArgs";
import { PromptCategoryWhereUniqueInput } from "./PromptCategoryWhereUniqueInput";
import { PromptCategoryUpdateInput } from "./PromptCategoryUpdateInput";

export class PromptCategoryControllerBase {
  constructor(protected readonly service: PromptCategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PromptCategory })
  async createPromptCategory(
    @common.Body() data: PromptCategoryCreateInput
  ): Promise<PromptCategory> {
    return await this.service.createPromptCategory({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PromptCategory] })
  @ApiNestedQuery(PromptCategoryFindManyArgs)
  async promptCategories(
    @common.Req() request: Request
  ): Promise<PromptCategory[]> {
    const args = plainToClass(PromptCategoryFindManyArgs, request.query);
    return this.service.promptCategories({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PromptCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async promptCategory(
    @common.Param() params: PromptCategoryWhereUniqueInput
  ): Promise<PromptCategory | null> {
    const result = await this.service.promptCategory({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: PromptCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePromptCategory(
    @common.Param() params: PromptCategoryWhereUniqueInput,
    @common.Body() data: PromptCategoryUpdateInput
  ): Promise<PromptCategory | null> {
    try {
      return await this.service.updatePromptCategory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: PromptCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePromptCategory(
    @common.Param() params: PromptCategoryWhereUniqueInput
  ): Promise<PromptCategory | null> {
    try {
      return await this.service.deletePromptCategory({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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