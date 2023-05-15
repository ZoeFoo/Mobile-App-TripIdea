import { Module } from '@nestjs/common';
import { TravelPlansService } from './travel-plans.service';
import { TravelPlansController } from './travel-plans.controller';

@Module({
  controllers: [TravelPlansController],
  providers: [TravelPlansService]
})
export class TravelPlansModule {}
