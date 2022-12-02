import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { nfdivFeaturesRoutes } from "./lib.routes";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDateFnsModule } from "@angular/material-date-fns-adapter";
import { MatCardModule } from "@angular/material/card";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import { SimpleDateService } from "./simple-date/simple-date.service";
import { HttpClientModule } from "@angular/common/http";
import { DefendantsTableComponent } from './multi-party/defendants-table/defendants-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PlaintivesTableComponent } from './multi-party/plaintives-table/plaintives-table.component';
import { AddressFormComponent } from './multi-party/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CdkScrollableModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDateFnsModule,
    MatCardModule,
    RouterModule.forChild(nfdivFeaturesRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [SimpleDateService],
  declarations: [
    DefendantsTableComponent,
    PlaintivesTableComponent,
    AddressFormComponent
  ],
})
export class NfdivFeaturesModule {}
