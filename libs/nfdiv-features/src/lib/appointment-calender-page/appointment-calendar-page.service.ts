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

  getAppointment() : AppointmentsModel | undefined {
    return this.appointment;
  }

  updateAppointment(){
   // Call to case api
  }
}
