import { Test, TestingModule } from '@nestjs/testing';
import { LocationCategoryService } from './location-category.service';

describe('LocationCategoryService', () => {
  let service: LocationCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationCategoryService],
    }).compile();

    service = module.get<LocationCategoryService>(LocationCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
