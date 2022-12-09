import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule, MatSelectionListChange } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { SelectionChange } from "@angular/cdk/collections";

interface Appointments {
  person: string;
  timeslot: Date;
  booked: boolean;
}

@Component({
  selector: "eui-appointment-calender-list",
  standalone: true,
  imports: [ CommonModule, MatListModule, MatIconModule],
  templateUrl: "./appointment-calender-list.component.html",
  styleUrls: ["./appointment-calender-list.component.scss"],
})
export class AppointmentCalenderListComponent {
  @Input()
  appointmentTimes: Appointments[] | undefined
  @Output()
  valueSelected = new EventEmitter<any>()

  emitSelection($event: MatSelectionListChange) {
    this.valueSelected.emit($event.options[0].value);
  }
}
