import { OmitType } from "@nestjs/swagger";
import { TravelPlan } from '../entities/travel-plan.entity';

export class CreateTravelPlanDto extends OmitType(TravelPlan, ['id', 'thumbnail']) { };
