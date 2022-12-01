import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentCalenderListComponent } from "../appointment-calender-list/appointment-calender-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { format } from "date-fns";
import { DateAdapter } from "@angular/material/core";
import { enGB } from "date-fns/locale";
import { SaveButtonGroupComponent } from "@hmcts-common";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { AppointmentCalendarPageService } from "./appointment-calendar-page.service";
import { AppointmentsModel } from "../appointment.model";

@Component({
  selector: "eui-appointment-calender-page",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppointmentCalenderListComponent,
    MatDatepickerModule,
    MatCardModule,
    SaveButtonGroupComponent,
  ],
  templateUrl: "./appointment-calender-page.component.html",
  styleUrls: ["./appointment-calender-page.component.scss"],
})
export class AppointmentCalenderPageComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(LOCALE_ID) public locale: string,
    private adapter: DateAdapter<any>,
    private service: AppointmentCalendarPageService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.currentRoute = event.url;
        if (this.currentRoute.includes("appointment")) {
          this.routerlinkNext = this.currentRoute + `/confirm`;
        } else {
          this.routerlinkNext = this.currentRoute + `/appointment/confirm`;
        }
      }
    });
  }
  startDate: string | null | undefined;
  selected: string | null | undefined;
  continue = false;
  appointmentTimes: any = [];
  routerlinkNext: any;
  routerLinkCancel: any;
  currentRoute: string | undefined;

  ngOnInit() {
    this.adapter.setLocale(enGB);
    this.startDate = format(Date.now(), "dd/MM/yyyy");
  }

  dateChange($event: any) {
    this.appointmentTimes = this.showTimeSlots($event);
  }
  /*
  Simulate an array of appointments for the day
   */
  private showTimeSlots(selectedDate: Date) {
    let timeslots = [];
    const caseOfficers = [
      "Mike Tyson",
      "Mary Tyler",
      "Fred Bloggs",
      "Jules Verne",
    ];
    let apptTime = 9;

    for (let i = 0; i < 4; i++) {
      selectedDate.setHours(apptTime);
      let appt = {
        person: caseOfficers[Math.floor(Math.random() * 4)],
        timeslot: selectedDate,
        booked: Math.random() > 0.5,
      };
      timeslots.push(appt);
      apptTime += 2;
    }
    return timeslots;
  }

  validateSelection($event: any) {
    console.log("got a value", $event);
    this.service.setAppointment($event as AppointmentsModel);
    this.continue = $event != undefined;
  }
}
