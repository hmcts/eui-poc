import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { CaseworkersModule } from "./caseworkers/caseworkers.module";
import { CaseWorker } from "./caseworkers/caseworker.entity";

import { CaseworkersService } from "./caseworkers/caseworkers.service";

import { CaseworkerController } from "./caseworkers/caseworker.controller";

import { AppointmentModule } from "./appointment/appointment/appointment.module";
import { Appointment } from "./appointment/appointment/entities/appointment.entity";
import { AppointmentController } from "./appointment/appointment/appointment.controller";
import { AppointmentService } from "./appointment/appointment/appointment.service";
import { CaseModule } from "./case/case.module";
import { PartyModule } from "./party/party.module";
import { PartyController } from "./party/party.controller";
import { PartyService } from "./party/party.service";
import { Party } from "./party/entities/party.entity";

@Module({
  imports: [
    AppointmentModule,
    CaseworkersModule,
    CaseModule,
    PartyModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Appointment, CaseWorker, Party],
      synchronize: true, // Don't use in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
