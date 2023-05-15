import { OmitType } from "@nestjs/swagger";
import { Share } from '../entities/share.entity';

export class CreateShareDto extends OmitType(Share, ['id'] as const) { }
