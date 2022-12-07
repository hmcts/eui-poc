import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentCalendarPageService} from "../appointment-calender-page/appointment-calendar-page.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


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
              private route: ActivatedRoute,
              private http: HttpClient
              ) {}

  async onSubmit(): Promise<void> {
    const d = this.service.getAppointment()?.timeslot;

    // console.error(this.service.getAppointment())
    let data = {
      // appointmentDate: "2019-01-01T12:12:12.000"
      appointmentDate: this.service.getAppointment()?.timeslot
    };
    let cid = this.route.snapshot.paramMap.get("cid");
    await this.http.post(`/microsite/nfdiv/api/case/${cid}`, data).subscribe(x => {
      window.location.href = `/cases/case-details/${cid}`
    })
  }
}
