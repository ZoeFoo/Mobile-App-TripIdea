import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret, 
            signOptions: { expiresIn: '7d' },
        })
    ],
    controllers: [LikesController],
    providers: [LikesService, PrismaService, JwtStrategy]
})
export class LikesModule {}
