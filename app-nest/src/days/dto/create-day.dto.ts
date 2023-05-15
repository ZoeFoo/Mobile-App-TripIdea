import { OmitType } from "@nestjs/swagger";
import { Day } from '../entities/day.entity';

export class CreateDayDto extends OmitType(Day, ['id'] as const) { }
