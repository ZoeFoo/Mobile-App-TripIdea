import { PartialType } from '@nestjs/swagger';
import { CreateLocationCategoryDto } from './create-location-category.dto';

export class UpdateLocationCategoryDto extends PartialType(CreateLocationCategoryDto) {}
