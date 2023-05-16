import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SharesService } from './shares.service';
import { CreateShareDto } from './dto/create-share.dto';
import { UpdateShareDto } from './dto/update-share.dto';
import { ApiTags } from '@nestjs/swagger';
import { Share } from './entities/share.entity';

@ApiTags('shares')
@Controller('shares')
export class SharesController {
  constructor(private readonly sharesService: SharesService) {}

    @Post()
    async create(@Body() createShareDto: CreateShareDto) {
        return await this.sharesService.create(createShareDto);
    }

    @Get()
    async findAll(): Promise<Share[]> {
        return await this.sharesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.sharesService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateShareDto: UpdateShareDto) {
        return await this.sharesService.update(+id, updateShareDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.sharesService.remove(+id);
    }
}
