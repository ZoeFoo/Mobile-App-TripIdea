import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { TransportationsService } from './transportations.service';
import { TransportationsController } from './transportations.controller';

@Module({
  controllers: [TransportationsController],
    providers: [TransportationsService, PrismaService]
})
export class TransportationsModule {}
