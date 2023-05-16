import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { AreasService } from 'src/areas/areas.service';

@Module({
  controllers: [CitiesController],
    providers: [CitiesService, PrismaService, AreasService]
})
export class CitiesModule {}
