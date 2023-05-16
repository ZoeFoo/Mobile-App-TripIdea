import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
    constructor(private prisma: PrismaService) { }

    async create(id: number, createLocationDto: CreateLocationDto): Promise<any> {
        let location = await this.prisma.location.create({ data: { ...createLocationDto } })
        console.log(location)
        return location;
    }

    async findAll(): Promise<any[]> {
        return await this.prisma.location.findMany();
    }

    async getTotalDay(id: number, whichDay: number) {
        let days = await this.prisma.day.findMany({
            where: { travelPlanId: id },
            include: {
                locations: true
            }
        })

        // console.log('day', day)

        if (whichDay) {
            for (let day of days) {
                if (day.travelPlanId == id && day.whichDay == whichDay) {
                    let foundDay = await this.prisma.day.findFirst({
                        where: {
                            travelPlanId: id,
                            whichDay: whichDay
                        },
                        include: {
                            locations: true
                        }
                    })
                    console.log('foundDay', foundDay)
                    return foundDay;
                }
            }
        } else {
            throw new NotFoundException('TravelPlanDay not found!')
        }
    }

    async findOne(id: number) {
        let foundLocation = await this.prisma.location.findFirst({
            where: { id }
        });

        if (!foundLocation) throw new NotFoundException("TravelPlanDetail not found!")
        return foundLocation;
    }

    async update(id: number, updateLocationDto: UpdateLocationDto) {
        let result = await this.prisma.location.update({
            where: { id },
            data: updateLocationDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.location.delete({ where: { id } })
        return result;
    }
}
