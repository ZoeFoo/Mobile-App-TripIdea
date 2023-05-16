import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { City } from './entities/city.entity';


@Injectable()
export class CitiesService {
    constructor(private prisma: PrismaService) { }

    async create(createCityDto: CreateCityDto): Promise<City> {
        let city = await this.prisma.city.create({ data: { ...createCityDto } })
        //console.log(city)
        return city[0];
    }

    async findAll(): Promise<City[]> {
        return await this.prisma.city.findMany();
    }

    async findCities(id: number): Promise<any> {
        let foundCities = await this.prisma.city.findMany({ where: { areaId: id } });

        if (!foundCities) throw new NotFoundException('City not found!');
        return foundCities;
    }

    async findOne(id: number) {
        let foundCity = await this.prisma.city.findFirst({ where: { id } })

        if (!foundCity) throw new NotFoundException('City not found!');
        return foundCity;
    }

    async update(id: number, updateCityDto: UpdateCityDto) {
        let result = await this.prisma.city.update({
            where: { id },
            data: updateCityDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.city.delete({ where: { id } })
        return result;
    }
}
