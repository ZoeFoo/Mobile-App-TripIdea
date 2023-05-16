import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
    constructor(private prisma: PrismaService) { }

    async create(createCountryDto: CreateCountryDto): Promise<Country> {
        let country = await this.prisma.country.create({ data: { ...createCountryDto } })
        //console.log(country)
        return country;
    }

    async findAll(): Promise<Country[]> {
        return await this.prisma.country.findMany();
    }

    async findOne(id: number) {
        let foundCountry = await this.prisma.country.findFirst({ where: { id } })

        if (!foundCountry) throw new NotFoundException('Country not found!')
        return foundCountry;
    }

    async update(id: number, updateCountryDto: UpdateCountryDto) {
        let result = await this.prisma.country.update({
            where: { id },
            data: updateCountryDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.country.delete({ where: { id } })
        return result;
    }
}
