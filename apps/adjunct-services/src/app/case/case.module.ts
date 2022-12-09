import { Module } from '@nestjs/common';
import { CaseController } from './case/case.controller';
import {CaseApi} from "./case/case-api";
import {CaseApiClient} from "./case/case-api-client";

@Module({
  controllers: [CaseController],
  providers: [
      CaseApi,
      CaseApiClient
  ]
})
export class CaseModule {}
