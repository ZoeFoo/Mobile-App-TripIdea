import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { UpdateTransportationDto } from './dto/update-transportation.dto';
import { Transportation } from './entities/transportation.entity';

@Injectable()
export class TransportationsService {
    constructor(private prisma: PrismaService) { }

    async create(createTransportationDto: CreateTransportationDto): Promise<Transportation> {
        let transportation = await this.prisma.transportation.create({
            data: { ...createTransportationDto }
        })
        console.log(transportation)
        return transportation;
    }

    async findAll(): Promise<Transportation[]> {
        return await this.prisma.transportation.findMany({
            include: { locations: false }
        });
    }

    async findOne(id: number) {
        let foundTransportation = await this.prisma.transportation.findFirst({
            where: { id },
            include: { locations: false }
        })

        if (!foundTransportation) throw new NotFoundException('Transportation not found')
        return foundTransportation;
    }

    async update(id: number, updateTransportationDto: UpdateTransportationDto) {
        let result = await this.prisma.transportation.update({
            where: { id },
            data: updateTransportationDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.transportation.delete({ where: { id } })
        return result;
    }
}
