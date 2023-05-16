import { Test, TestingModule } from '@nestjs/testing';
import { LocationCategoryController } from './location-category.controller';
import { LocationCategoryService } from './location-category.service';

describe('LocationCategoryController', () => {
  let controller: LocationCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationCategoryController],
      providers: [LocationCategoryService],
    }).compile();

    controller = module.get<LocationCategoryController>(LocationCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
