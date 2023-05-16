import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        let user = await this.prisma.user.create({ data: { ...createUserDto } })
        console.log(user)
        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany({
            include: {
                followers: true,
                followings: true,
                plans: true,
                likes: true,
                shares: true,
            }
        });
    }

    async findOne(id: number): Promise<User> {
        let foundUser = await this.prisma.user.findFirst({
            where: { id },
            include: {
                followers: true,
                followings: true,
                plans: true,
                likes: true,
                shares: true,
            }
        })

        if (!foundUser) throw new NotFoundException('User not found!')
        return foundUser;
    }

    async findOneByEmail(email: string): Promise<User> {
        let foundUser = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        })

        // console.log('UsersService findOneByEmail foundUser: ', foundUser);

        if (!foundUser) throw new NotFoundException('User not found!')

        return foundUser;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        let result = await this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        })
        return result;
    }

    async remove(id: number) {
        let result = await this.prisma.user.delete({ where: { id } })
        return result;
    }
}
