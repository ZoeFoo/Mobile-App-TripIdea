import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelPlansService } from './travel-plans.service';
import { CreateTravelPlanDto } from './dto/create-travel-plan.dto';
import { UpdateTravelPlanDto } from './dto/update-travel-plan.dto';

@Controller('travel-plans')
export class TravelPlansController {
  constructor(private readonly travelPlansService: TravelPlansService) {}

  @Post()
  create(@Body() createTravelPlanDto: CreateTravelPlanDto) {
    return this.travelPlansService.create(createTravelPlanDto);
  }

  @Get()
  findAll() {
    return this.travelPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelPlansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravelPlanDto: UpdateTravelPlanDto) {
    return this.travelPlansService.update(+id, updateTravelPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelPlansService.remove(+id);
  }
}
