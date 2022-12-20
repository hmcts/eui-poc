import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { party_providers } from "./party.providers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Party } from "./entities/party.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Party])],
  controllers: [PartyController],
  providers: [PartyService],
})
export class PartyModule {}
