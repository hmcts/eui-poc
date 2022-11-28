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

@Module({
  imports: [
    AppointmentModule,
    CaseworkersModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Appointment, CaseWorker],
      synchronize: true, // Don't use in production
    }),
    AppointmentModule,
  ],
  controllers: [AppController, CaseworkerController, AppointmentController],
  providers: [AppService, CaseworkersService, AppointmentService],
})
export class AppModule {}
