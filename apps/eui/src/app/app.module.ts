import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CommonFooterComponent, CommonHeaderComponent, CommonServiceHeaderComponent } from "@hmcts-common";
import {
  AppointmentCalenderPageComponent,
  NfdivFeaturesModule,
  SimpleDatePageComponent,
} from "@nfdiv/features";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { SaveButtonGroupComponent } from "@hmcts-common";
import { SimpleDateComponent } from "@hmcts-common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { PhaseBannerComponent } from "../../../../libs/hmcts-ui-common/src/lib/phase-banner/phase-banner.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonHeaderComponent,
    CommonFooterComponent,
    NfdivFeaturesModule,
    AppointmentCalenderPageComponent,
    SaveButtonGroupComponent,
    SimpleDateComponent,
    SimpleDatePageComponent,
    AppRoutingModule,
    CommonServiceHeaderComponent,
    PhaseBannerComponent
  ],
  providers: [
    HttpClientModule,
    { provide: MAT_DATE_LOCALE, useValue: "en-gb" },
    { provide: LOCALE_ID, useValue: "en-gb" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
