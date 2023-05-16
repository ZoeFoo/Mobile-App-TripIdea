import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Query, Headers } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { ApiTags } from '@nestjs/swagger';
import { Like } from './entities/like.entity';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@UseGuards(AuthGuard('jwt'))
@ApiTags('likes')
@Controller('likes')
export class LikesController {
    constructor(
        private readonly likesService: LikesService,
        private jwtService: JwtService
    ) { }

    @Post()
    async create(@Headers("authorization") authHeader, @Body() createLikeDto: CreateLikeDto) {
        let access_token = authHeader.replace("Bearer ", "");
        console.log("POST /user-like access_token: ", access_token);

        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });

        // console.log("POST /user-like userObject: ", userObject, ", createPlanLikeDto: ", createPlanLikeDto);

        return await this.likesService.create(createLikeDto.travelPlanId, +userObject.id);
    }

    @Get()
    async findAll(): Promise<Like[]> {
        return await this.likesService.findAll();
    }

    @Get(':id')
    async findByPlanId(@Param('id') id: string) {
        return await this.likesService.findByPlanId(+id);
    }

    @Get('/user-like')
    async findOneByTravelPlanIdAndLikeUserId(@Headers("authorization") authHeader, @Query('travelPlanId') travelPlanId: number) {
        let access_token = authHeader.replace("Bearer ", "");
        console.log("POST /user-like access_token: ", access_token);

        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });
        console.log("POST /user-like userObject: ", userObject);

        return await this.likesService.findOneByTravelPlanIdAndLikeUserId(travelPlanId, userObject.id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateLikeDto: UpdateLikeDto) {
        return await this.likesService.update(+id, updateLikeDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.likesService.remove(+id);
    }
}
