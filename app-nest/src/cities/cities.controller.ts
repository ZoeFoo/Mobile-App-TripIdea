import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

    @Post()
    async create(@Body() createCityDto: CreateCityDto) {
        return await this.citiesService.create(createCityDto);
    }

    @Get()
    async findAll(): Promise<City[]> {
        return await this.citiesService.findAll();
    }

    @Get('/areaCities/:id')
    async findAreaCities(@Param('id') id: string): Promise<any> {
        return await this.citiesService.findCities(+id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.citiesService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateCityDto: UpdateCityDto) {
        return await this.citiesService.update(+id, updateCityDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.citiesService.remove(+id);
    }
}
