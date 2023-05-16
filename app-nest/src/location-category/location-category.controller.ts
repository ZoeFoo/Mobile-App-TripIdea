import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationCategoryService } from './location-category.service';
import { CreateLocationCategoryDto } from './dto/create-location-category.dto';
import { UpdateLocationCategoryDto } from './dto/update-location-category.dto';

@Controller('location-category')
export class LocationCategoryController {
  constructor(private readonly locationCategoryService: LocationCategoryService) {}

  @Post()
  create(@Body() createLocationCategoryDto: CreateLocationCategoryDto) {
    return this.locationCategoryService.create(createLocationCategoryDto);
  }

  @Get()
  findAll() {
    return this.locationCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationCategoryDto: UpdateLocationCategoryDto) {
    return this.locationCategoryService.update(+id, updateLocationCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationCategoryService.remove(+id);
  }
}
