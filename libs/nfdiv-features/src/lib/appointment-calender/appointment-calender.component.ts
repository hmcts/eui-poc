import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentCalenderListComponent} from "../appointment-calender-list/appointment-calender-list.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {format} from "date-fns";
import {DateAdapter} from "@angular/material/core";


@Component({
  selector: 'nfdiv-euipoc-appointment-calender',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentCalenderListComponent,
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './appointment-calender.component.html',
  styleUrls: ['./appointment-calender.component.scss'],
})
export class AppointmentCalenderComponent implements OnInit{
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private adapter: DateAdapter<any>) {
  }
  startDate: string | null | undefined;
  selected: string | null | undefined;
  ngOnInit() {
    this.adapter.setLocale(this.locale);
    this.startDate = format(Date.now(), 'dd/MM/yyyy')
  }

}
