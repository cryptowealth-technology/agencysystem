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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PromptHistoryUpdateManyWithoutPromptsInput } from "./PromptHistoryUpdateManyWithoutPromptsInput";
import { Type } from "class-transformer";

@InputType()
class PromptUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => PromptHistoryUpdateManyWithoutPromptsInput,
  })
  @ValidateNested()
  @Type(() => PromptHistoryUpdateManyWithoutPromptsInput)
  @IsOptional()
  @Field(() => PromptHistoryUpdateManyWithoutPromptsInput, {
    nullable: true,
  })
  promptHistories?: PromptHistoryUpdateManyWithoutPromptsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { PromptUpdateInput as PromptUpdateInput };
