import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { jwtConstants } from 'src/auth/constants';

@Module({
    providers: [UsersService, PrismaService, JwtStrategy],
    exports: [UsersService],
    controllers: [UsersController],
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret, // use to encrypt the payload of login return object
            signOptions: { expiresIn: 30 },
        })
    ],

})
export class UsersModule { }
