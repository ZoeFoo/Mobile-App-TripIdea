import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Follower } from './entities/follower.entity';
import { jwtConstants } from 'src/auth/constants';

@ApiTags('followers')
@Controller('followers')
export class FollowersController {
    constructor(
        private readonly followersService: FollowersService,
        private jwtService: JwtService
    ) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createFollowerDto: CreateFollowerDto, @Headers("authorization") authHeader: string): Promise<Follower> {
        let access_token = authHeader.replace("Bearer ", "");

        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });

        createFollowerDto.followerId = userObject.id;

        return this.followersService.create(createFollowerDto);
    }

    @Get()
    findAll() {
        return this.followersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.followersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFollowerDto: UpdateFollowerDto) {
        return this.followersService.update(+id, updateFollowerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.followersService.remove(+id);
    }
}
