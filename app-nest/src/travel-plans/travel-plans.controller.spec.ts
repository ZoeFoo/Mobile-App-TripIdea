import { Test, TestingModule } from '@nestjs/testing';
import { TravelPlansController } from './travel-plans.controller';
import { TravelPlansService } from './travel-plans.service';

describe('TravelPlansController', () => {
  let controller: TravelPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelPlansController],
      providers: [TravelPlansService],
    }).compile();

    controller = module.get<TravelPlansController>(TravelPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
