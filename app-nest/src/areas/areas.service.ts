import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Injectable()
export class AreasService {
    constructor(private prisma: PrismaService) { }

    async create(createAreaDto: CreateAreaDto) {
        let area = await this.prisma.area.create({ data: { ...createAreaDto } })
        //console.log(areas)
        return area;
    }

    async findAll(): Promise<Area[]> {
        return await this.prisma.area.findMany();
    }

    async findAreas(id: number) {
        let foundAreas = await this.prisma.area.findMany(
            { where: { countryId: id } }
        )
        // console.log('foundAreas', foundAreas)

        if (!foundAreas) throw new NotFoundException('Area not found!')
        return foundAreas;
    }

    async findOne(id: number) {
        let foundArea = await this.prisma.area.findFirst(
            { where: { id } }
        )

        if (!foundArea) throw new NotFoundException('Area not found!')
        return foundArea;
    }

    async update(id: number, updateAreaDto: UpdateAreaDto) {
        let result = await this.prisma.area.update({
            where: { id },
            data: updateAreaDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.area.delete({ where: { id } })
        return result;
    }
}
