import { OmitType } from "@nestjs/swagger";
import { Like } from '../entities/like.entity';

export class CreateLikeDto extends OmitType(Like, ['id', 'likeUserId'] as const) { }
