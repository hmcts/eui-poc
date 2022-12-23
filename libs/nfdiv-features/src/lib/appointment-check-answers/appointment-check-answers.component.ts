import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentCalendarPageService} from "../appointment-calender-page/appointment-calendar-page.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import { WindowService } from "@hmcts-common";


//TODO -- Populate with dynamic data
// Change buttons are static at present tap into the history api or other dynamic
// mechanism
@Component({
  selector: 'eui-appointment-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-confirm.component.html',
  styleUrls: ['./appointment-confirm.component.scss']
})
export class AppointmentCheckAnswersComponent {
  changeBack = ''
  constructor(public service: AppointmentCalendarPageService,
              private windowService: WindowService,
              private route: ActivatedRoute,
              private http: HttpClient
              ) {}

  async onSubmit(): Promise<void> {
    const d = this.service.getAppointment()?.timeslot;
    let data = {
      appointmentDate: this.service.getAppointment()?.timeslot
    };
    let cid = this.route.snapshot.paramMap.get("cid");
    this.changeBack = `case-details/${cid}/trigger/update-appointment`
    await this.http.post(`/microsite/nfdiv/api/case/${cid}`, data).subscribe(x => {
      window.location.href = `/cases/case-details/${cid}`
    })
  }

  onClick($event: MouseEvent): void {
    $event.preventDefault();
    this.windowService.nativeWindow.history.back();
  }
}
