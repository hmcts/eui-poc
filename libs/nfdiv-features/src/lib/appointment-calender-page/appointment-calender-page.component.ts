import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentCalenderListComponent } from "../appointment-calender-list/appointment-calender-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { format } from "date-fns";
import { DateAdapter } from "@angular/material/core";
import { enGB } from "date-fns/locale";
import { SaveButtonGroupComponent } from "@hmcts-common";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { AppointmentCalendarPageService } from "./appointment-calendar-page.service";
import { AppointmentsModel } from "../appointment.model";
import { BehaviorSubject, Subscription } from "rxjs";
import { CaseIdPipe } from "../case-id/case-id.pipe";
import { RouterHistoryService } from "@hmcts-common";
import { WindowService } from "@hmcts-common";

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
    CaseIdPipe
  ],
  templateUrl: "./appointment-calender-page.component.html",
  styleUrls: ["./appointment-calender-page.component.scss"],
})
export class AppointmentCalenderPageComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription
  private dataSubscription  = new Subscription()
  previousUrlViaNavigationEnd$ = new BehaviorSubject<string | null>(null);
  currentUrlViaNavigationEnd$ = new BehaviorSubject<string | null>(null);

  previousUrlViaRoutesRecognized$ = new BehaviorSubject<string | null>(null);
  currentUrlViaRoutesRecognized$ = new BehaviorSubject<string | null>(null);

  // Via RouterHistoryService
  previousUrlViaRouterHistoryService$ = this.historyService.previousUrl$;
  currentUrlViaRouterHistoryService$ = this.historyService.currentUrl$;
  caseId = "";
  caseTrigger = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string,
    private adapter: DateAdapter<any>,
    private service: AppointmentCalendarPageService,
    private historyService : RouterHistoryService,
    private windowService: WindowService
  ) {
   this.routerSubscription =  this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.previousUrlViaNavigationEnd$.next(
          this.currentUrlViaNavigationEnd$.value
        );
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
    this.dataSubscription =  this.route.data.subscribe((data) => {
      this.caseId = data['caseId'];
      this.caseTrigger = data['triggerType'];
    });
    this.routerLinkCancel = this.onClick
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
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

  onClick($event: MouseEvent): void {
    $event.preventDefault();
    this.windowService.nativeWindow.history.back();
  }
}
