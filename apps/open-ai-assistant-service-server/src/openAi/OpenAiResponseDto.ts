import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("OpenAiResponseDtoObject")
class OpenAiResponseDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    result!: string;
}

export { OpenAiResponseDto as OpenAiResponseDto };