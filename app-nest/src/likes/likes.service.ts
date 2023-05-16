import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
    constructor(private prisma: PrismaService) { }

    async create(travelPlanId: number, likeUserId: number): Promise<Like> {
        let like = await this.prisma.like.create({ data: { travelPlanId, likeUserId } })
        // console.log(like)
        return like;
    }

    async findAll(): Promise<Like[]> {
        return await this.prisma.like.findMany();
    }

    async findByPlanId(travelPlanId: number): Promise<Like[]> {
        let result = await this.prisma.like.findMany({
            where: { travelPlanId }
        });

        return result;
    }

    async findOneByTravelPlanIdAndLikeUserId(travelPlanId: number, likeUserId: number) {

        let planLikes = await this.prisma.like.findMany(
            {
                where: {
                    travelPlanId, likeUserId
                }
            })

        if (!planLikes) throw new NotFoundException('Like not found!')
        return planLikes;
    }

    async findOne(id: number) {
        return await this.prisma.like.findFirst();
    }

    async update(id: number, updateLikeDto: UpdateLikeDto) {
        let result = await this.prisma.like.update({
            where: { id },
            data: updateLikeDto
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.like.delete({ where: { id } })
        return result;
    }
}
