import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day } from './entities/day.entity';

@Injectable()
export class DaysService {
    constructor(private prisma: PrismaService) { }

    async create(createDayDto: CreateDayDto): Promise<Day> {
        let day = await this.prisma.day.create({ data: { ...createDayDto } })
        console.log(day);
        return day;
    }

    async findAll(): Promise<Day[]> {
        return await this.prisma.day.findMany({
            include: {
                locations: true
            }
        });
    }

    async findOne(id: number) {
        let foundDay = await this.prisma.day.findFirst({
            where: { id },
            include: {
                locations: true
            }
        })

        console.log('foundDay', foundDay)

        if (!foundDay) throw new NotFoundException('Day not found!')
        return foundDay;
    }

    async update(id: number, updateDayDto: UpdateDayDto) {
        let result = await this.prisma.day.update({
            where: { id },
            data: updateDayDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.day.delete({ where: { id } })
        return result
    }
}
