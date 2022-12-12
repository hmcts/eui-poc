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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddressFormComponent } from './multi-party/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { PartiesTableComponent } from './multi-party/parties-table/parties-table.component';
import { DependantsTableComponent } from './multi-party/dependants-table/dependants-table.component';

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
    AddressFormComponent,
    PartiesTableComponent,
    DependantsTableComponent
  ],
})
export class NfdivFeaturesModule {}
