import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UsersService } from 'src/users/users.service';
import { DaysService } from 'src/days/days.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './public/travelPlanDetail_locationImgs',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
                    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
                },
            }),
        }),
    ],
    controllers: [LocationsController],
    providers: [
        LocationsService,
        PrismaService,
        UsersService,
        DaysService,
        JwtService]
})
export class LocationsModule {}
