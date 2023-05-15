import { OmitType } from "@nestjs/swagger";
import { Area } from "../entities/area.entity";

export class CreateAreaDto extends OmitType(Area, ['id'] as const) { }
