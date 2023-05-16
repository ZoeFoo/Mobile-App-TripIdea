import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, NotFoundException, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiTags } from '@nestjs/swagger';
import { Location } from './entities/location.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
];

let defaultLocationImgFile = 'default_locationImg.jpeg';

@ApiTags('travel-plan-details')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

    @Post(':id')
    @UseInterceptors(FileInterceptor('locationImgFile'))
    async create(
        @Param('id', ParseIntPipe) id: string,
        @Body() createLocationDto: CreateLocationDto,
        @UploadedFile() locationImgFile,
    ) {
        const data: any = {};

        for (let key in createLocationDto) {
            if (key == "locationImgFile") continue;
            data[key] = createLocationDto[key];
            // console.log('detail key', key)
        }

        if (locationImgFile == null) {
            data.locationImg = defaultLocationImgFile;
        } else {
            data.locationImg = locationImgFile.path
        }

        if (locationImgFile && (!locationImgFile?.mimetype || !allowedMimeTypes.includes(locationImgFile.mimetype.toLowerCase()))) {
            fs.unlinkSync(locationImgFile.path)
            throw new NotFoundException("Invalid image type")
        }

        switch (true) {
            case !data.areaId && !data.cityId:
                data.areaId = null;
                data.cityId = null;
                break;
            case data.areaId && !data.cityId:
                data.areaId = parseInt(`${createLocationDto.areaId}`);
                data.cityId = null;
                break;
            default:
                data.areaId = parseInt(`${createLocationDto.areaId}`);

                if (createLocationDto.cityId !== null) {
                    data.cityId = parseInt(`${createLocationDto.cityId}`);
                }
                break;
        }

        data.travelPlanDayId = +id;
        data.countryId = parseInt(`${createLocationDto.countryId}`);

        return await this.locationsService.create(+id, data);
    }

    @Get()
    async findAll(): Promise<Location[]> {
        return await this.locationsService.findAll();
    }

    @Get('/getDayDetail/:id')
    async getTotalDay(@Param('id') id: string, @Query('whichDay') whichDay: string) {
        //console.log({ id })
        return await this.locationsService.getTotalDay(+id, +whichDay);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.locationsService.findOne(+id);
    }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('locationImgFile'))
  async update(
      @Param('id', ParseIntPipe) id: string,
      @Body() updateLocationDto: UpdateLocationDto,
      @UploadedFile() locationImgFile,
  ) {
      let originalPlanDetails = await this.locationsService.findOne(+id);
      let originalCountryId = originalPlanDetails.countryId;

      const data: any = {};

      for (let key in updateLocationDto) {
          if (key == "locationImgFile") continue;
          data[key] = updateLocationDto[key];
      }

      if (originalCountryId !== data.countryId) {

          if (locationImgFile == null) {
              data.locationImg = defaultLocationImgFile;
          } else {
              data.locationImg = locationImgFile.path
          }

          if (locationImgFile && (!locationImgFile?.mimetype || !allowedMimeTypes.includes(locationImgFile.mimetype.toLowerCase()))) {
              fs.unlinkSync(locationImgFile.path)
              throw new NotFoundException("Invalid image type")
          }

          switch (true) {
              case !data.areaId && !data.cityId:
                  data.areaId = null;
                  data.cityId = null;
                  break;
              case data.areaId && !data.cityId:
                  data.areaId = parseInt(`${updateLocationDto.areaId}`);
                  data.cityId = null;
                  break;
              default:
                  data.areaId = parseInt(`${updateLocationDto.areaId}`);
                  data.cityId = parseInt(`${updateLocationDto.cityId}`);
          }

          data.dayId = parseInt(`${updateLocationDto.dayId}`);
          data.countryId = parseInt(`${updateLocationDto.countryId}`);

          return await this.locationsService.update(+id, data);
      }
  }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: string) {
        return await this.locationsService.remove(+id);
    }
}
