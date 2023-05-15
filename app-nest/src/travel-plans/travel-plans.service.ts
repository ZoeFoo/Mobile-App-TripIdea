import { Injectable } from '@nestjs/common';
import { CreateTravelPlanDto } from './dto/create-travel-plan.dto';
import { UpdateTravelPlanDto } from './dto/update-travel-plan.dto';

@Injectable()
export class TravelPlansService {
  create(createTravelPlanDto: CreateTravelPlanDto) {
    return 'This action adds a new travelPlan';
  }

  findAll() {
    return `This action returns all travelPlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelPlan`;
  }

  update(id: number, updateTravelPlanDto: UpdateTravelPlanDto) {
    return `This action updates a #${id} travelPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelPlan`;
  }
}
