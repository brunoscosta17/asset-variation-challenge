import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultPricesRoutingModule } from './consult-prices-routing.module';
import { ConsultPricesComponent } from './consult-prices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VariationResultGraphComponent } from 'src/app/components/variation-result-graph/variation-result-graph.component';

@NgModule({
  declarations: [
    ConsultPricesComponent,
    VariationResultGraphComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConsultPricesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ConsultPricesModule { }
