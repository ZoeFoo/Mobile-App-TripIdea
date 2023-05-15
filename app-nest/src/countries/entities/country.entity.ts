import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Country {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    engName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    chName: string;
}
