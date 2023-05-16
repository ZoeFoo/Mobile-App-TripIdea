import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DaysService } from './days.service';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { ApiTags } from '@nestjs/swagger';
import { Day } from './entities/day.entity';

@ApiTags('days')
@Controller('days')
export class DaysController {
  constructor(private readonly daysService: DaysService) {}

    @Post()
    async create(@Body() createDayDto: CreateDayDto) {
        return await this.daysService.create(createDayDto);
    }

    @Get()
    async findAll(): Promise<Day[]> {
        return await this.daysService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.daysService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateDayDto: UpdateDayDto) {
        return await this.daysService.update(+id, updateDayDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.daysService.remove(+id);
    }
}
