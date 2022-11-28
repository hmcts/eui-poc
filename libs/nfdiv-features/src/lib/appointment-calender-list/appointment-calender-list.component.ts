import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

interface Appointments {
  person: string;
  timeslot: Date;
  booked: boolean;
}

@Component({
  selector: "eui-appointment-calender-list",
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: "./appointment-calender-list.component.html",
  styleUrls: ["./appointment-calender-list.component.scss"],
})
export class AppointmentCalenderListComponent {
  timeslots: Appointments[] = [
    { person: "Mike Tyson", timeslot: new Date(), booked: true },
    { person: "Mary Tyler", timeslot: new Date(), booked: true },
    { person: "Fred Bloggs", timeslot: new Date(), booked: true },
    { person: "Jules Verne", timeslot: new Date(), booked: true },
  ];
}
