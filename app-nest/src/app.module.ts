import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LocationsModule } from './locations/locations.module';
import { DaysModule } from './days/days.module';
import { LikesModule } from './likes/likes.module';
import { CountriesModule } from './countries/countries.module';
import { AreasModule } from './areas/areas.module';
import { CitiesModule } from './cities/cities.module';
import { FollowersModule } from './followers/followers.module';
import { TravelPlansModule } from './travel-plans/travel-plans.module';
import { SharesModule } from './shares/shares.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TransporationsModule } from './transporations/transporations.module';
import { LocationCategoryModule } from './location-category/location-category.module';
import { TransportationsModule } from './transportations/transportations.module';

@Module({
  imports: [UsersModule, TravelPlansModule, LocationsModule, DaysModule, LikesModule, CountriesModule, AreasModule, CitiesModule, FollowersModule, SharesModule, TransporationsModule, LocationCategoryModule, TransportationsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
