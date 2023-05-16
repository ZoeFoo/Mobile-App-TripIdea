import { Injectable } from '@nestjs/common';
import { CreateLocationCategoryDto } from './dto/create-location-category.dto';
import { UpdateLocationCategoryDto } from './dto/update-location-category.dto';

@Injectable()
export class LocationCategoryService {
  create(createLocationCategoryDto: CreateLocationCategoryDto) {
    return 'This action adds a new locationCategory';
  }

  findAll() {
    return `This action returns all locationCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationCategory`;
  }

  update(id: number, updateLocationCategoryDto: UpdateLocationCategoryDto) {
    return `This action updates a #${id} locationCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationCategory`;
  }
}
