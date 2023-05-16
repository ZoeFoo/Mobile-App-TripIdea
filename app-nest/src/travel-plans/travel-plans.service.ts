import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateTravelPlanDto } from './dto/create-travel-plan.dto';
import { UpdateTravelPlanDto } from './dto/update-travel-plan.dto';
import { TravelPlan } from './entities/travel-plan.entity';
import { CreateDayDto } from '../days/dto/create-day.dto';
import { Like, Day, Share, User } from '@prisma/client';


@Injectable()
export class TravelPlansService {
    constructor(private prisma: PrismaService) { }

    async create(createTravelPlanDto: CreateTravelPlanDto, createDayDto: CreateDayDto): Promise<TravelPlan> {
        let plan = await this.prisma.travelPlan.create({ data: { ...createTravelPlanDto } });

        const tripStartDate = plan.startDay;
        const tripEndDate = plan.endDay;

        let date_1 = new Date(tripEndDate);
        let date_2 = new Date(tripStartDate);

        let difference = date_1.getTime() - date_2.getTime();

        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

        const travelPlan = { ...plan, TotalDays: TotalDays };

        for (let x = 1; x < TotalDays + 1; x++) {
            let number = x;
            await this.prisma.day.create({
                data: {
                    travelPlanId: plan.id,
                    whichDay: number,
                }
            })
        };

        return travelPlan;
    }

    async findAll(): Promise<any[]> {
        const users = await this.prisma.user.findMany();
        let travelPlans = await this.prisma.travelPlan.findMany({
            include: {
                days: true,
                likes: true,
                travelPlanChildren: true
            }
        });

        const plans = []

        for (let travelPlan of travelPlans) {
            const user = users.filter(({ id }) => id == travelPlan.authorId)[0];
            const plan = { ...travelPlan, userNickname: user?.nickname };

            plans.push(plan);
        }

        return plans;
    }

    async findOne(id: number) {
        let foundTravelPlan = await this.prisma.travelPlan.findFirst({
            where: { id },
            include: {
                days: true,
                likes: true,
                travelPlanChildren: true
            }
        });

        const users = await this.prisma.user.findFirst({
            where: { id: foundTravelPlan.authorId }
        });

        const planResult = [];

        if (foundTravelPlan.likes.length > 0) {
            const plan = { ...foundTravelPlan, userNickname: users?.nickname, userIcon: users.icon, planLikes: foundTravelPlan.likes.length };
            planResult.push(plan)
        } else {
            const plan = { ...foundTravelPlan, userNickname: users?.nickname, userIcon: users.icon, planLikes: 0 };
            planResult.push(plan)
        }

        if (!foundTravelPlan) throw new NotFoundException("TravelPlan not found!")
        return planResult;
    }

    async findMyselfPlan(id: number, name: string): Promise<any[]> {
        const users = await this.prisma.user.findMany({
            where: { id }
        });
        let travelPlans;

        if (name) {
            travelPlans = await this.prisma.travelPlan.findMany({
                where: {
                    authorId: id,
                    name: { contains: name },
                },
                include: {
                    days: true,
                    likes: true,
                    travelPlanChildren: true
                }
            });
        } else {
            travelPlans = await this.prisma.travelPlan.findMany({
                where: { authorId: id },
                include: {
                    days: true,
                    likes: true,
                    travelPlanChildren: true
                }
            });
        };

        const plans = [];

        for (let travelPlan of travelPlans) {
            const user = users.filter(({ id }) => id == travelPlan.authorId)[0];

            const plan = { ...travelPlan, userNickname: user?.nickname };

            plans.push(plan);
        }

        return plans;
    }

    async findHitPlan(name: string): Promise<any[]> {
        const users = await this.prisma.user.findMany();
        const travelPlans = await (async () => {
            if (name) {
                return await this.prisma.travelPlan.findMany({
                    where: {
                        name: { contains: name, },
                    },
                    include: {
                        days: true,
                        likes: true,
                        travelPlanChildren: true
                    }
                });
            }

            return await this.prisma.travelPlan.findMany({
                include: {
                    days: true,
                    likes: true,
                    travelPlanChildren: true
                }
            });
        })();

        const plans = [];

        for (let travelPlan of travelPlans) {
            const user = users.filter(({ id }) => id == travelPlan.authorId)[0];
            if (travelPlan.status == "PUBLIC") {
                if (travelPlan.likes.length > 0) {
                    const plan = { ...travelPlan, userNickname: user?.nickname, planLikes: travelPlan.likes.length };

                    plans.push(plan);
                } else {
                    const plan = { ...travelPlan, userNickname: user?.nickname, planLikes: 0 };

                    plans.push(plan);
                }
            }

            const plan = { ...travelPlan, userNickname: user?.nickname };

            plans.push(plan);
        }

        const hitPlan = plans.sort((a, b) => b.planLikes - a.planLikes)

        //console.log('hitPlan', hitPlan)
        return hitPlan;
    }

    async findPlansCreatedByUser(userId: number): Promise<any[]> {
        const travelPlans = await this.prisma.travelPlan.findMany({
            where: { authorId: userId },
            include: {
                days: true,
                likes: true,
                travelPlanChildren: true,
                shares: true,
            }
        });
        //console.log('findPlansCreatedByUser: ', travelPlans);

        return travelPlans;
    }

    async update(id: number, updateTravelPlanDto: UpdateTravelPlanDto) {
        let result = await this.prisma.travelPlan.update({
            where: { id },
            data: updateTravelPlanDto
        })
        return result;
    }

    async remove(id: number) {
        let result = [];
        let travelPlanId;

        const shares = await this.prisma.share.findMany({
            where: { travelPlanId: id }
        });

        if (shares.length != 0) {
            for await (let share of shares) {
                if (share.travelPlanId == id) {
                    let shareDelete = await this.prisma.share.delete({
                        where: { id: share.id }
                    })
                    result.push(shareDelete);
                }
            }
        }

        const days = await this.prisma.day.findMany({
            where: { travelPlanId: id }
        });

        if (days.length != 0) {
            for await (let day of days) {
                const locations = await this.prisma.location.findMany({
                    where: {
                        dayId: day.id
                    }
                });

                if (locations.length != 0) {
                    for (let location of locations) {
                        let locationDelete = await this.prisma.location.delete({
                            where: { id: location.id }
                        })
                        result.push(locationDelete)
                    }
                };

                let dayDelete = await this.prisma.day.deleteMany({
                    where: { travelPlanId: id }
                })
                result.push(dayDelete)
            }
        }

        let planDelete = await this.prisma.travelPlan.delete({
            where: { id }
        })
        result.push(planDelete)

        return result;
    }
}
