import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { CommonFooterComponent, CommonHeaderComponent } from "@hmcts-common";
import {
  AppointmentCalenderComponent,
  NfdivFeaturesModule,
  SimpleDatePageComponent,
} from "@nfdiv/features";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { SaveButtonGroupComponent } from "@hmcts-common";
import { SimpleDateComponent } from "@hmcts-common";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CommonHeaderComponent,
    CommonFooterComponent,
    NfdivFeaturesModule,
    AppointmentCalenderComponent,
    SaveButtonGroupComponent,
    SimpleDateComponent,
    SimpleDatePageComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-gb" },
    { provide: LOCALE_ID, useValue: "en-gb" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
