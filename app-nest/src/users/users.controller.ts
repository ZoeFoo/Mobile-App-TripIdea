import { Controller, Request, Headers, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/constants';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/self')
    async findSelf(@Request() req, @Headers("authorization") authHeader): Promise<User> {
        // console.log('/users/single authHeader: ', authHeader);
        // authHeader: Bearer ey01242743zxnskdcsuidfsv
        let access_token = authHeader.replace("Bearer ", "");

        console.log("access_token: ", access_token);
        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });

        console.log('userObject: ', userObject);

        //get userObject ID 
        return await this.usersService.findOne(userObject.id);
    }

    @Post('/signup')
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.usersService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.usersService.remove(+id);
    }
}
