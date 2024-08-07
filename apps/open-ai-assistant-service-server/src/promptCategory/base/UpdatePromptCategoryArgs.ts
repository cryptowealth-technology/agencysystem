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
import { PromptCategoryWhereUniqueInput } from "./PromptCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PromptCategoryUpdateInput } from "./PromptCategoryUpdateInput";

@ArgsType()
class UpdatePromptCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => PromptCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromptCategoryWhereUniqueInput)
  @Field(() => PromptCategoryWhereUniqueInput, { nullable: false })
  where!: PromptCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PromptCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PromptCategoryUpdateInput)
  @Field(() => PromptCategoryUpdateInput, { nullable: false })
  data!: PromptCategoryUpdateInput;
}

export { UpdatePromptCategoryArgs as UpdatePromptCategoryArgs };
