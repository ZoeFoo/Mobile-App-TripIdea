import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@ApiTags('areas')
@Controller('areas')
export class AreasController {
    constructor(private readonly areasService: AreasService) { }

    @Post()
    async create(@Body() createAreaDto: CreateAreaDto) {
        return await this.areasService.create(createAreaDto);
    }

    @Get()
    async findAll(): Promise<Area[]> {
        return await this.areasService.findAll();
    }

    @Get('/countryAreas/:id')
    async findCountryAreas(@Param('id') id: string) {
        return await this.areasService.findAreas(+id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.areasService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateAreaDto: UpdateAreaDto) {
        return await this.areasService.update(+id, updateAreaDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.areasService.remove(+id);
    }
}
