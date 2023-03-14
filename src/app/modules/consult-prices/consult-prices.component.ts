import { ConsultPricesService } from './../../services/consult-prices.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { _MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  { day: 1, date: '10/08/2023', value: 1.0079, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 2, date: '10/08/2023', value: 4.0026, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 3, date: '10/08/2023', value: 6.941, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 4, date: '10/08/2023', value: 9.0122, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 5, date: '10/08/2023', value: 10.811, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 6, date: '10/08/2023', value: 12.0107, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 7, date: '10/08/2023', value: 14.0067, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 8, date: '10/08/2023', value: 15.9994, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 9, date: '10/08/2023', value: 18.9984, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 10, date: '10/08/2023', value: 20.1797, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 11, date: '10/08/2023', value: 22.9897, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 12, date: '10/08/2023', value: 24.305, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 13, date: '10/08/2023', value: 26.9815, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' },
  { day: 14, date: '10/08/2023', value: 28.0855, dailyPriceChange: '10%', priceChangeSinceBeginning: '10%' }
];


@Component({
  selector: 'app-consult-prices',
  templateUrl: './consult-prices.component.html',
  styleUrls: ['./consult-prices.component.scss']
})
export class ConsultPricesComponent implements AfterViewInit {

  queryField = new FormControl();

  displayedColumns: string[] = [ 'day', 'date', 'value', 'dailyPriceChange', 'priceChangeSinceBeginning' ];
  dataSource = new _MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private consultPricesService: ConsultPricesService) {
    this.queryField.setValue('PETR4.SA');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
