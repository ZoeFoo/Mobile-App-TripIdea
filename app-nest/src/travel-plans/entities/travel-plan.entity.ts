import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class TravelPlan {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    authorId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ default: "null" })
    @IsInt()
    referencePlanId: number;

    @ApiProperty()
    @IsNotEmpty()
    startDay: Date;

    @ApiProperty()
    @IsNotEmpty()
    endDay: Date;

    @ApiProperty()
    @IsString()
    thumbnail: string;

    @ApiProperty({ default: "PUBLIC" })
    @IsEnum(Status)
    status: Status = Status.PUBLIC;
}
