import { Test, TestingModule } from '@nestjs/testing';
import { CaseworkerController } from './caseworker.controller';
import { CaseworkersService } from "./caseworkers.service";

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
