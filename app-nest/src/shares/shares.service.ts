import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateShareDto } from './dto/create-share.dto';
import { UpdateShareDto } from './dto/update-share.dto';
import { Share } from './entities/share.entity';

@Injectable()
export class SharesService {
    constructor(private prisma: PrismaService) { }

    async create(createShareDto: CreateShareDto): Promise<Share> {
        let share = await this.prisma.share.create({ data: { ...createShareDto } })
        return share;
    }

    async findAll(): Promise<Share[]> {
        return await this.prisma.share.findMany()
    }

    async findOne(id: number) {
        let foundTravelPlanShare = await this.prisma.share.findFirst({ where: { id } })

        if (!foundTravelPlanShare) throw new NotFoundException('TravelPlanShare not found!')
        return foundTravelPlanShare
    }

    async update(id: number, updateShareDto: UpdateShareDto) {
        let result = await this.prisma.share.update({
            where: { id },
            data: updateShareDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.share.delete({ where: { id } })
        return result;
    }
}
