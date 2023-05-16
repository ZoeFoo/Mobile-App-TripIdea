import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { SharesService } from './shares.service';
import { SharesController } from './shares.controller';
import { UsersService } from 'src/users/users.service';
import { TravelPlansService } from 'src/travel-plans/travel-plans.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [SharesController],
    providers: [
        SharesService,
        PrismaService,
        UsersService,
        TravelPlansService,
        JwtService
    ]
})
export class SharesModule {}
