import { ConsultPricesService } from './../../services/consult-prices.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consult-prices',
  templateUrl: './consult-prices.component.html',
  styleUrls: ['./consult-prices.component.scss']
})
export class ConsultPricesComponent {

  queryField = new FormControl();

  constructor(private consultPricesService: ConsultPricesService) {}

  search(): void {
    this.queryField.value
    console.log(this.queryField.value);
    this.consultPricesService
      .getPrices(this.queryField.value)
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
