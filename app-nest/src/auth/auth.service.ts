import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'nestjs-prisma';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        private prisma: PrismaService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: email,
                password: pass
            }
        })
        console.log('signIn user: ', user);
        if (!user) {
            throw new UnauthorizedException("User cannot be found, wrong email or password");
        }

        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        let access_token = await this.jwtService.signAsync(user)
        console.log('access_token: ', access_token)
        return {
            access_token
        }
    }
}