import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

}