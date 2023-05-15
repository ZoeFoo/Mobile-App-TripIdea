import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsNotEmpty, MinLength, MaxLength, IsEmail, IsEnum } from "class-validator";
import { Role } from '@prisma/client';


export class User {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    nickname: string;

    @ApiProperty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsString()
    @MaxLength(8)
    phone: string;

    @ApiProperty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsString()
    selfIntroduction: string;

    @ApiProperty({ default: "USER" })
    @IsEnum(Role)
    role: Role = Role.USER;
}