import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { nfdivFeaturesRoutes } from './lib.routes';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDateFnsModule} from '@angular/material-date-fns-adapter'
import {MatCardModule} from "@angular/material/card";
import {CdkScrollableModule} from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    CdkScrollableModule,
    MatDatepickerModule,
    MatDateFnsModule,
    MatCardModule,
    RouterModule.forChild(nfdivFeaturesRoutes)],
})
export class NfdivFeaturesModule {}
