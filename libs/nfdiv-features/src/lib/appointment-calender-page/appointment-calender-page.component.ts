import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentCalenderListComponent } from "../appointment-calender-list/appointment-calender-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { format } from "date-fns";
import { DateAdapter } from "@angular/material/core";
import { enGB } from "date-fns/locale";
import { SaveButtonGroupComponent } from "@hmcts-common";

@Component({
  selector: "eui-appointment-calender-page",
  standalone: true,
  imports: [
    CommonModule,
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
    @Inject(LOCALE_ID) public locale: string,
    private adapter: DateAdapter<any>
  ) {}
  startDate: string | null | undefined;
  selected: string | null | undefined;
  ngOnInit() {
    this.adapter.setLocale(enGB);
    this.startDate = format(Date.now(), "dd/MM/yyyy");
    this.selected = format(Date.now(), "dd/MM/yyyy");
  }
}