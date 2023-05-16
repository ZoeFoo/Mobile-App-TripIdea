import { ApiProperty } from "@nestjs/swagger";
import {  IsInt, IsNotEmpty, IsString } from "class-validator";

export class Location {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    dayId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    countryId: number;

    @ApiProperty({ default: null })
    @IsInt()
    areaId: number;

    @ApiProperty({ default: null })
    @IsInt()
    cityId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    locationName: string;

    @ApiProperty()
    @IsString()
    locationImg: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    tel: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    startTime: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    endTime: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    transportationId: number;

    @ApiProperty()
    @IsString()
    notes: string;
}
