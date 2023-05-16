import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Follower } from './entities/follower.entity';

@Injectable()
export class FollowersService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async create(createFollowerDto: CreateFollowerDto): Promise<Follower> {
        if (createFollowerDto.followerId === createFollowerDto.followingId)
            throw new NotAcceptableException(
                `Cannot insert userFollow! 
      followerId: ${createFollowerDto.followerId}, 
      followingId: ${createFollowerDto.followingId}
      `)

        let userFollow = await this.prisma.follower.create({
            data: { ...createFollowerDto },
            include: {
                follower: {
                    include: {
                        followers: true,
                        followings: true,
                        plans: false,
                        likes: false
                    }
                },
                following: {
                    include: {
                        followers: true,
                        followings: true,
                        plans: false,
                        likes: false
                    }
                },
            }
        });

        // 如insert失敗，可能是已存在重疊follow關係, e.g. 1 -> 3, 1 -> 3
        if (!userFollow)
            throw new NotAcceptableException(
                `Cannot insert userFollow! 
      followerId: ${createFollowerDto.followerId}, 
      followingId: ${createFollowerDto.followingId}
      `)
        console.log('userFollow: ', userFollow);

        return userFollow;
    }

    findAll() {
        return `This action returns all followers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} follower`;
    }

    update(id: number, updateFollowerDto: UpdateFollowerDto) {
        return `This action updates a #${id} follower`;
    }

    remove(id: number) {
        return `This action removes a #${id} follower`;
    }
}
