import { Route } from "@angular/router";
import { SimpleDatePageComponent } from "./simple-date/simple-date-page/simple-date-page.component";
import { AppointmentPageComponent } from "./appointment-page/appointment-page.component";
import { AppointmentCalenderComponent } from "./appointment-calender/appointment-calender.component";

export const nfdivFeaturesRoutes: Route[] = [
  { path: "", pathMatch: "full", component: SimpleDatePageComponent },
  {
    path: "appointment",
    pathMatch: "prefix",
    component: AppointmentCalenderComponent,
  },
];
