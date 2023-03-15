import { DataPrices } from './../../interfaces/data-prices.interface';
import { PRICES } from './prices.mock';
import { ConsultPricesService } from './../../services/consult-prices.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { _MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-consult-prices',
  templateUrl: './consult-prices.component.html',
  styleUrls: ['./consult-prices.component.scss']
})
export class ConsultPricesComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: DataPrices[] = [];

  queryField = new FormControl();

  displayedColumns: string[] = [ 'day', 'timestamps', 'price', 'dailyPriceChange', 'priceChangeSinceBeginning' ];

  dataSource = new _MatTableDataSource<DataPrices>(this.ELEMENT_DATA);

  dataMock = PRICES;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private consultPricesService: ConsultPricesService) {
    this.queryField.setValue('PETR4.SA');
  }

  ngOnInit(): void {

    const prices = this.dataMock.chart.result[0].indicators.quote[0].close.slice(-30);
    const arrayDates = this.dataMock.chart.result[0].timestamp.slice(-30);

    const priceChanges = prices.map((price: number, index: number) => {

      const prevPrice = prices[index - 1];
      const dailyPriceChange = prevPrice ? ((price - prevPrice) / prevPrice) * 100 : 0;
      const priceChangeSinceBeginning = ((price - prices[0]) / prices[0]) * 100;
      const timestamps = arrayDates[index];
      return { days: index+1, timestamps, price, dailyPriceChange, priceChangeSinceBeginning };

    });
    this.ELEMENT_DATA = priceChanges;
    this.dataSource = new _MatTableDataSource<DataPrices>(this.ELEMENT_DATA);
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
          this.dataSource = new _MatTableDataSource<any>(data);
        },
        error: (e: Error) => {
          console.log(`$error - ${e.message}`);
        },
      });
  }

}
