import { Component, OnInit } from '@angular/core';
import { StockPriceService } from './stock-price-service.service';
import { ChartDataset, ChartOptions, ChartType, Color, LabelItem } from 'chart.js';
import { NgChartsModule,  } from 'ng2-charts';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss']
})
export class StockPriceComponent implements OnInit {

  priceChanges: any[] = [];

  public lineChartData: ChartDataset[] = [{ data: [], label: 'Preço' }];
  public lineChartLabels: LabelItem[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          callback: (value: any) => {
            return new Date(value * 1000).toLocaleDateString();
          }
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private _stockPriceService: StockPriceService) { }

  ngOnInit(): void {
    this.getAssetVariatoinPrices();
  }

  getAssetVariatoinPrices() {
    this._stockPriceService
      .getPrices()
      .subscribe({
        next: (response: any) => {
          const prices = response.chart.result[0].indicators.quote[0].close;

          const arrayDates = response.chart.result[0].timestamp;

          const priceChanges = prices.map((price: number, index: number) => {
            const prevPrice = prices[index - 1];
            const change = prevPrice ? ((price - prevPrice) / prevPrice) * 100 : 0;
            const totalChange = ((price - prices[0]) / prices[0]) * 100;
            const date = arrayDates[index];
            return { date, price, change, totalChange };
          });

          this.priceChanges = priceChanges.slice(1);

        }
      });
  }

  getChartData() {
    this._stockPriceService
      .getChartData('PETR4.SA')
      .then(response => {
        const data = response.data.chart.result[0];
        const prices = data.indicators.quote[0].close;
        const timestamps = data.timestamp;
        this.lineChartData[0].data = prices;
        this.lineChartLabels = timestamps.map((timestamp: any) => timestamp.toString());
    });
  }

}
