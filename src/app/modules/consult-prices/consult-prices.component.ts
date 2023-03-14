import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consult-prices',
  templateUrl: './consult-prices.component.html',
  styleUrls: ['./consult-prices.component.scss']
})
export class ConsultPricesComponent {

  queryField = new FormControl();

  search(): void {
    console.log(this.queryField.value);
  }

}
