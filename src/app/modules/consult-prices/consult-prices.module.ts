import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultPricesRoutingModule } from './consult-prices-routing.module';
import { ConsultPricesComponent } from './consult-prices.component';


@NgModule({
  declarations: [
    ConsultPricesComponent
  ],
  imports: [
    CommonModule,
    ConsultPricesRoutingModule
  ]
})
export class ConsultPricesModule { }
