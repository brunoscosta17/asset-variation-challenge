import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultPricesRoutingModule } from './consult-prices-routing.module';
import { ConsultPricesComponent } from './consult-prices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ConsultPricesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConsultPricesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ConsultPricesModule { }
