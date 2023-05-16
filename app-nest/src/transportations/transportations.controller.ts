import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TransportationsService } from './transportations.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { UpdateTransportationDto } from './dto/update-transportation.dto';
import { ApiTags } from '@nestjs/swagger';
import { Transportation } from './entities/transportation.entity';

@ApiTags('transportations')
@Controller('transportations')
export class TransportationsController {
    constructor(private readonly transportationsService: TransportationsService) { }

    @Post()
    async create(@Body() createTransportationDto: CreateTransportationDto) {
        return await this.transportationsService.create(createTransportationDto);
    }

    @Get()
    async findAll(): Promise<Transportation[]> {
        return await this.transportationsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.transportationsService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateTransportationDto: UpdateTransportationDto) {
        return await this.transportationsService.update(+id, updateTransportationDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.transportationsService.remove(+id);
    }
}
