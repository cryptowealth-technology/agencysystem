/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Prompt } from "./Prompt";
import { PromptCountArgs } from "./PromptCountArgs";
import { PromptFindManyArgs } from "./PromptFindManyArgs";
import { PromptFindUniqueArgs } from "./PromptFindUniqueArgs";
import { CreatePromptArgs } from "./CreatePromptArgs";
import { UpdatePromptArgs } from "./UpdatePromptArgs";
import { DeletePromptArgs } from "./DeletePromptArgs";
import { PromptHistoryFindManyArgs } from "../../promptHistory/base/PromptHistoryFindManyArgs";
import { PromptHistory } from "../../promptHistory/base/PromptHistory";
import { PromptService } from "../prompt.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Prompt)
export class PromptResolverBase {
  constructor(
    protected readonly service: PromptService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "read",
    possession: "any",
  })
  async _promptsMeta(
    @graphql.Args() args: PromptCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Prompt])
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "read",
    possession: "any",
  })
  async prompts(@graphql.Args() args: PromptFindManyArgs): Promise<Prompt[]> {
    return this.service.prompts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Prompt, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "read",
    possession: "own",
  })
  async prompt(
    @graphql.Args() args: PromptFindUniqueArgs
  ): Promise<Prompt | null> {
    const result = await this.service.prompt(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Prompt)
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "create",
    possession: "any",
  })
  async createPrompt(@graphql.Args() args: CreatePromptArgs): Promise<Prompt> {
    return await this.service.createPrompt({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Prompt)
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "update",
    possession: "any",
  })
  async updatePrompt(
    @graphql.Args() args: UpdatePromptArgs
  ): Promise<Prompt | null> {
    try {
      return await this.service.updatePrompt({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Prompt)
  @nestAccessControl.UseRoles({
    resource: "Prompt",
    action: "delete",
    possession: "any",
  })
  async deletePrompt(
    @graphql.Args() args: DeletePromptArgs
  ): Promise<Prompt | null> {
    try {
      return await this.service.deletePrompt(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PromptHistory], { name: "promptHistories" })
  @nestAccessControl.UseRoles({
    resource: "PromptHistory",
    action: "read",
    possession: "any",
  })
  async findPromptHistories(
    @graphql.Parent() parent: Prompt,
    @graphql.Args() args: PromptHistoryFindManyArgs
  ): Promise<PromptHistory[]> {
    const results = await this.service.findPromptHistories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
