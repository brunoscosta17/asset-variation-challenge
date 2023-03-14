import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts/lib/ng-charts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockPriceComponent } from './stock-price/stock-price.component';

@NgModule({
  declarations: [
    AppComponent,
    StockPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
