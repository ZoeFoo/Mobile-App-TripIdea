import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { DaysService } from './days.service';
import { DaysController } from './days.controller';
import { TravelPlansService } from 'src/travel-plans/travel-plans.service';

@Module({
  controllers: [DaysController],
    providers: [DaysService, PrismaService, TravelPlansService]
})
export class DaysModule {}
