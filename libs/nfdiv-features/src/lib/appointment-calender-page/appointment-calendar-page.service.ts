import { Injectable } from '@angular/core';
import { AppointmentsModel } from "../appointment.model";


@Injectable({
  providedIn: 'root'
})
export class AppointmentCalendarPageService {
  private appointment: AppointmentsModel | undefined

  constructor() { }

  setAppointment($event: AppointmentsModel) {
    this.appointment = $event
  }

  getAppointment(){
    return this.appointment;
  }

  updateAppointment(){

  }
}
