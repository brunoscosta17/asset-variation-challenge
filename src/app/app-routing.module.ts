import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPriceComponent } from './stock-price/stock-price.component';

const routes: Routes = [
  { path: '', component: StockPriceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
