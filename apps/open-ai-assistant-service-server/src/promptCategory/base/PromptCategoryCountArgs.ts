/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromptCategoryWhereInput } from "./PromptCategoryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PromptCategoryCountArgs {
  @ApiProperty({
    required: false,
    type: () => PromptCategoryWhereInput,
  })
  @Field(() => PromptCategoryWhereInput, { nullable: true })
  @Type(() => PromptCategoryWhereInput)
  where?: PromptCategoryWhereInput;
}

export { PromptCategoryCountArgs as PromptCategoryCountArgs };
