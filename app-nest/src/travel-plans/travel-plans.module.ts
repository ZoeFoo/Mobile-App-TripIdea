import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { TravelPlansService } from './travel-plans.service';
import { TravelPlansController } from './travel-plans.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UsersService } from 'src/users/users.service';
import { SharesService } from 'src/shares/shares.service';
import { DaysService } from 'src/days/days.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { jwtConstants } from 'src/auth/constants';

@Module({
    imports: [
        MulterModule.register({
            limits: { fieldSize: 25 * 1024 * 1024 },
            storage: diskStorage({
                destination: './public/travelPlan_thumbnalis',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
                    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
                },
            }),
        }),
        JwtModule.register({
            secret: jwtConstants.secret, 
            signOptions: { expiresIn: '7d' },
        })
    ],
    controllers: [TravelPlansController],
    providers: [
        TravelPlansService,
        PrismaService,
        UsersService,
        SharesService,
        DaysService,
        JwtStrategy]
})
export class TravelPlansModule { }
