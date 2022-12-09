import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SaveButtonGroupComponent } from "@hmcts-common";
import {
  AppointmentCalenderPageComponent,
  AppointmentCalenderListComponent,
} from "@nfdiv/features";

@Component({
  selector: "eui-appointment-page",
  standalone: true,
  imports: [
    CommonModule,
    SaveButtonGroupComponent,
    AppointmentCalenderPageComponent,
    AppointmentCalenderListComponent,
  ],
  templateUrl: "./appointment-page.component.html",
  styleUrls: ["./appointment-page.component.scss"],
})
export class AppointmentLandingPageComponent {}
