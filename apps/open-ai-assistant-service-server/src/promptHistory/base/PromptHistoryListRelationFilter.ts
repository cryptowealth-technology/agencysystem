/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromptHistoryWhereInput } from "./PromptHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PromptHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PromptHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PromptHistoryWhereInput)
  @IsOptional()
  @Field(() => PromptHistoryWhereInput, {
    nullable: true,
  })
  every?: PromptHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromptHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PromptHistoryWhereInput)
  @IsOptional()
  @Field(() => PromptHistoryWhereInput, {
    nullable: true,
  })
  some?: PromptHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromptHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PromptHistoryWhereInput)
  @IsOptional()
  @Field(() => PromptHistoryWhereInput, {
    nullable: true,
  })
  none?: PromptHistoryWhereInput;
}
export { PromptHistoryListRelationFilter as PromptHistoryListRelationFilter };