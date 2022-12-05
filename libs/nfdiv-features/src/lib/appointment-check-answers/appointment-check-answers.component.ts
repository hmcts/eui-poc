import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentCalendarPageService} from "../appointment-calender-page/appointment-calendar-page.service";
import {HttpClient} from "@angular/common/http";


//TODO -- Populate with dynamic data
@Component({
  selector: 'eui-appointment-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-confirm.component.html',
  styleUrls: ['./appointment-confirm.component.scss']
})
export class AppointmentCheckAnswersComponent {
  constructor(public service: AppointmentCalendarPageService,
              private http: HttpClient
              ) {}

  async onSubmit(): Promise<void> {
    var d = this.service.getAppointment()?.timeslot

    // console.error(this.service.getAppointment())
    var data = {

      // appointmentDate: "2019-01-01T12:12:12.000"
      appointmentDate: this.service.getAppointment()?.timeslot
    };
    await this.http.post('/microsite/nfdiv/api/case/foo', data).subscribe(x => console.log(x))
  }
}
