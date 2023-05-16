import { OmitType } from "@nestjs/swagger";
import { Transportation } from '../entities/transportation.entity';

export class CreateTransportationDto extends OmitType(Transportation, ['id'] as const) { }
