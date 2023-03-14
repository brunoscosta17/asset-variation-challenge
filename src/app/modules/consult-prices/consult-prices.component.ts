import { ConsultPricesService } from './../../services/consult-prices.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-consult-prices',
  templateUrl: './consult-prices.component.html',
  styleUrls: ['./consult-prices.component.scss']
})
export class ConsultPricesComponent {

  queryField = new FormControl();

  constructor(private consultPricesService: ConsultPricesService) {this.queryField.setValue('PETR4.SA');}

  search(): void {
    console.log(this.queryField.value);
    this.consultPricesService
      .getPrices(this.queryField.value)
      .pipe(
        map(data => data.chart.result[0].indicators.quote[0].open),
        map(prices => prices.slice(-30)))
      .subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (e: Error) => {
          console.log(`$error - ${e.message}`);
        },
      });
  }

}
