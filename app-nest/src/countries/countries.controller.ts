import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Post()
    async create(@Body() createCountryDto: CreateCountryDto) {
        return await this.countriesService.create(createCountryDto);
    }

    @Get()
    async findAll(): Promise<Country[]> {
        return await this.countriesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.countriesService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateCountryDto: UpdateCountryDto) {
        return await this.countriesService.update(+id, updateCountryDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.countriesService.remove(+id);
    }
}
