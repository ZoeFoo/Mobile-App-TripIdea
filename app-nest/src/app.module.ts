import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersFollowModule } from './users_follow/users_follow.module';
import { TravelPlansModule } from './travel_plans/travel_plans.module';
import { PlansShareModule } from './plans_share/plans_share.module';
import { LocationsModule } from './locations/locations.module';
import { DaysModule } from './days/days.module';
import { LikesModule } from './likes/likes.module';
import { CountriesModule } from './countries/countries.module';
import { AreasModule } from './areas/areas.module';
import { CitiesModule } from './cities/cities.module';
import { FollowersModule } from './followers/followers.module';
import { TravelPlansModule } from './travel-plans/travel-plans.module';
import { SharesModule } from './shares/shares.module';

@Module({
  imports: [UsersModule, UsersFollowModule, TravelPlansModule, PlansShareModule, LocationsModule, DaysModule, LikesModule, CountriesModule, AreasModule, CitiesModule, FollowersModule, SharesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
