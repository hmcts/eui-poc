import { Route } from "@angular/router";
import { AppointmentCalenderPageComponent } from "./appointment-calender-page/appointment-calender-page.component";
import { AppointmentCheckAnswersComponent } from "./appointment-check-answers/appointment-check-answers.component";
import { CaseResolver } from "./case-resolver.service";

export const nfdivFeaturesRoutes: Route[] = [
  { path: "", pathMatch: "full", component: AppointmentCalenderPageComponent },
  { path: "case-details/:cid/trigger/update-appointment",
    pathMatch: "full", component: AppointmentCalenderPageComponent,
  resolve: [CaseResolver]},
  {
    path: "appointment",
    pathMatch: "prefix",
    component: AppointmentCalenderPageComponent,
  },
  {
    path: "case-details/:cid/trigger/update-appointment/confirm",
    pathMatch: "prefix",
    component: AppointmentCheckAnswersComponent,
    resolve: [CaseResolver]
  }
];
