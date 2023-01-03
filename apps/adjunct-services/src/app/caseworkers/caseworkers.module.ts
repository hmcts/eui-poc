import { Module } from "@nestjs/common";
import { CaseworkersService } from "./caseworkers.service";
import { CaseworkerController } from "./caseworker.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaseWorker } from "./caseworker.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CaseWorker])],
  providers: [CaseworkersService],
  controllers: [CaseworkerController],
})
export class CaseworkersModule {}
