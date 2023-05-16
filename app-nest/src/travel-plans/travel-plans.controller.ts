import * as fs from 'fs';
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, NotFoundException, Query, UseGuards, Request, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/constants';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { TravelPlansService } from './travel-plans.service';
import { CreateTravelPlanDto } from './dto/create-travel-plan.dto';
import { UpdateTravelPlanDto } from './dto/update-travel-plan.dto';
import { CreateDayDto } from '../days/dto/create-day.dto';

const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
];

@UseGuards(AuthGuard('jwt'))
@ApiTags('travel-plans')
@Controller('travel-plans')
export class TravelPlansController {
    constructor(
        private readonly travelPlansService: TravelPlansService,
        private jwtService: JwtService) { }

    @Post()
    @UseInterceptors(FileInterceptor('thumbnailFile'))
    async create(
        @Body() createTravelPlanDto: CreateTravelPlanDto,
        @UploadedFile() thumbnailFile,
        @Body() createTravelPlanDayDto: CreateDayDto,
        @Headers("authorization") authHeader
    ) {
        //console.log({ thumbnailFile });

        let access_token = authHeader.replace("Bearer ", "");
        //console.log("POST /travel-plans access_token: ", access_token);

        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });
        //console.log("POST /travel-plans userObject: ", userObject);

        const data: any = {};

        for (let key in createTravelPlanDto) {
            if (key == "thumbnailFile") continue;
            data[key] = createTravelPlanDto[key];
        }

        if (thumbnailFile) {
            data.thumbnail = thumbnailFile.path;
        }

        if (thumbnailFile && (!thumbnailFile?.mimetype || !allowedMimeTypes.includes(thumbnailFile.mimetype.toLowerCase()))) {
            fs.unlinkSync(thumbnailFile.path)
            throw new NotFoundException("Invalid image type")
        }

        data.authorId = userObject.id;
        data.startDay = new Date(`${createTravelPlanDto.startDay}`);
        data.endDay = new Date(`${createTravelPlanDto.endDay}`);

        return await this.travelPlansService.create(data, createTravelPlanDayDto);
    }

    @Get()
    async findAll(): Promise<any> {
        // console.log(this.travelPlansService.findAll())
        return await this.travelPlansService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.travelPlansService.findOne(+id);
    }

    @Get('/myselfPlan/:id')
    async findMyselfPlan(@Param('id') id: string, @Query('name') name: string): Promise<any> {
        // console.log(this.travelPlansService.findMyselfPlan(+id, name))
        return await this.travelPlansService.findMyselfPlan(+id, name);
    }

    @Get('/hitPlan')
    async findHitPlan(@Query('name') name: string): Promise<any> {
        // console.log(this.travelPlansService.findHitPlan(name))
        return await this.travelPlansService.findHitPlan(name);
    }

    @Get('/selfCreatedPlan')
    async findPlansCreatedByUser(@Request() req, @Headers("authorization") authHeader) {
        let access_token = authHeader.replace("Bearer ", "");

        // console.log("access_token: ", access_token);
        let userObject = await this.jwtService.verifyAsync(access_token, {
            secret: jwtConstants.secret
        });
        return await this.travelPlansService.findPlansCreatedByUser(userObject.id);
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('thumbnailFile'))
    async update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateTravelPlanDto: UpdateTravelPlanDto,
        @UploadedFile() thumbnailFile,) {
        const data: any = {};
        for (let key in updateTravelPlanDto) {
            if (key == "thumbnailFile") continue;
            data[key] = updateTravelPlanDto[key];
        }

        if (thumbnailFile) {
            data.thumbnail = thumbnailFile.path
        }

        if (thumbnailFile && (!thumbnailFile?.mimetype || !allowedMimeTypes.includes(thumbnailFile.mimetype.toLowerCase()))) {
            fs.unlinkSync(thumbnailFile.path)
            throw new NotFoundException("Invalid image type")
        }

        data.authorId = parseInt(`${updateTravelPlanDto.authorId}`);
        data.startDay = new Date(`${updateTravelPlanDto.startDay}`);
        data.endDay = new Date(`${updateTravelPlanDto.endDay}`);

        return await this.travelPlansService.update(+id, data);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.travelPlansService.remove(+id);
    }
}
