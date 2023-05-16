import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { CountriesService } from 'src/countries/countries.service';

@Module({
  controllers: [AreasController],
    providers: [AreasService, PrismaService, CountriesService]
})
export class AreasModule {}
