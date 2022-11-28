import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppointmentsModule } from "./appointments/appointments.module";
import { CaseworkersModule } from "./caseworkers/caseworkers.module";
import { CaseWorker } from "./caseworkers/caseworker.entity";
import { Appointment } from "./appointments/appointment.entity";
import { CaseworkersService } from "./caseworkers/caseworkers.service";
import { AppointmentsService } from "./appointments/appointments.service";

@Module({
  imports: [
    AppointmentsModule,
    CaseworkersModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [Appointment, CaseWorker],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CaseworkersService, AppointmentsService],
})
export class AppModule {}
