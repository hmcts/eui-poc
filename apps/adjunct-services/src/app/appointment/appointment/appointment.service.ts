import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Appointment } from "./entities/appointment.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppointmentService {

  constructor(@InjectRepository(Appointment) private readonly appointment: Repository<Appointment>) {
  }
  create(createAppointmentDto: CreateAppointmentDto) {
    return this.appointment.save(createAppointmentDto);
  }

  findAll() {
    return this.appointment.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
