import { Module } from '@nestjs/common';
import { LocationCategoryService } from './location-category.service';
import { LocationCategoryController } from './location-category.controller';

@Module({
  controllers: [LocationCategoryController],
  providers: [LocationCategoryService]
})
export class LocationCategoryModule {}
