import { Module } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  controllers: [FollowersController],
    providers: [FollowersService, PrismaService, JwtStrategy],
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7d' },
        })
    ],
})
export class FollowersModule {}
