import { OmitType } from "@nestjs/swagger";
import { LocationCategory } from '../entities/location-category.entity';

export class CreateLocationCategoryDto extends OmitType(LocationCategory, ['id'] as const) { }
