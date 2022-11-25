import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CommonFooterComponent, CommonHeaderComponent } from "@hmcts-common";
import {
  AppointmentCalenderComponent,
  NfdivFeaturesModule,
  SimpleDatePageComponent,
} from "@nfdiv/features";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { SaveButtonGroupComponent } from "@hmcts-common";
import { SimpleDateComponent } from "@hmcts-common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonHeaderComponent,
    CommonFooterComponent,
    NfdivFeaturesModule,
    AppointmentCalenderComponent,
    SaveButtonGroupComponent,
    SimpleDateComponent,
    SimpleDatePageComponent,
    AppRoutingModule,
  ],
  providers: [
    HttpClientModule,
    { provide: MAT_DATE_LOCALE, useValue: "en-gb" },
    { provide: LOCALE_ID, useValue: "en-gb" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
