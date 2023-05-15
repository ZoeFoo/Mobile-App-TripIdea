import { OmitType } from "@nestjs/swagger";
import { City } from "../entities/city.entity";

export class CreateCityDto extends OmitType(City, ['id'] as const) { }
