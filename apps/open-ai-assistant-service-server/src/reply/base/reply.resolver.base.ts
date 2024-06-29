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
import { Reply } from "./Reply";
import { ReplyCountArgs } from "./ReplyCountArgs";
import { ReplyFindManyArgs } from "./ReplyFindManyArgs";
import { ReplyFindUniqueArgs } from "./ReplyFindUniqueArgs";
import { DeleteReplyArgs } from "./DeleteReplyArgs";
import { ReplyService } from "../reply.service";
@graphql.Resolver(() => Reply)
export class ReplyResolverBase {
  constructor(protected readonly service: ReplyService) {}

  async _repliesMeta(
    @graphql.Args() args: ReplyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Reply])
  async replies(@graphql.Args() args: ReplyFindManyArgs): Promise<Reply[]> {
    return this.service.replies(args);
  }

  @graphql.Query(() => Reply, { nullable: true })
  async reply(
    @graphql.Args() args: ReplyFindUniqueArgs
  ): Promise<Reply | null> {
    const result = await this.service.reply(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reply)
  async deleteReply(
    @graphql.Args() args: DeleteReplyArgs
  ): Promise<Reply | null> {
    try {
      return await this.service.deleteReply(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
