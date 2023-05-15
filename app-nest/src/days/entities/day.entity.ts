import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class Day {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    travelPlanId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    whichDay: number;
}
