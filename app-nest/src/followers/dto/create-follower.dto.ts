import { OmitType } from "@nestjs/swagger";
import { Follower } from '../entities/follower.entity';

export class CreateFollowerDto extends OmitType(Follower, ["id", "followerId"] as const) {
    followerId: number;
};
