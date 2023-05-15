import { ApiProperty } from "@nestjs/swagger/dist";
import { IsInt, IsNotEmpty } from "class-validator";

export class Follower {
    @ApiProperty({ default: 1 })
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    followerId: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    followingId: number;
}
