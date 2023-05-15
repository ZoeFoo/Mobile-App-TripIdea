import { OmitType } from "@nestjs/swagger";
import { Location } from '../entities/location.entity';

export class CreateLocationDto extends OmitType(Location, ['id'] as const) { };
