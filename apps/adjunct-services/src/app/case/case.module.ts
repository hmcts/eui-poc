import { Module } from '@nestjs/common';
import { CaseController } from './case/case.controller';

@Module({
  controllers: [CaseController]
})
export class CaseModule {}
