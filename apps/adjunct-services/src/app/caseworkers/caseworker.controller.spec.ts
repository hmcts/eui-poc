import { Test, TestingModule } from '@nestjs/testing';
import { CaseworkerController } from './caseworker.controller';

describe('CaseworkerController', () => {
  let controller: CaseworkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseworkerController],
    }).compile();

    controller = module.get<CaseworkerController>(CaseworkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
