import { Route } from "@angular/router";
import { SimpleDatePageComponent } from "./simple-date/simple-date-page/simple-date-page.component";
import { AppointmentCalenderPageComponent } from "./appointment-calender-page/appointment-calender-page.component";

export const nfdivFeaturesRoutes: Route[] = [
  { path: "", pathMatch: "full", component: SimpleDatePageComponent },
  {
    path: "appointment",
    pathMatch: "prefix",
    component: AppointmentCalenderPageComponent,
  },
];
