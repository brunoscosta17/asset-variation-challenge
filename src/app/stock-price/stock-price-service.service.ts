import { STOCK_PRICE_MOCK } from './stock-price.mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private readonly apiUrl = 'https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA?range=1mo&interval=1d&includePrePost=false';
  mock = STOCK_PRICE_MOCK;

  private readonly baseUrl = 'https://query2.finance.yahoo.com/v8/finance/chart';
  private readonly symbol = 'PETR4.SA';
  private readonly range = '1mo';

  constructor(private _http: HttpClient) { }

  getPrices(): Observable<any> {
    // return this._http.get<any>(this.apiUrl).pipe(
    //   map((data) => {
    //     const quotes = data.chart.result[0].indicators.quote[0];
    //     const timestamps = data.chart.result[0].timestamp;
    //     const values = quotes.open;

    //     return { timestamps, values };
    //   })
    // );
    return new Observable<any>(subs => subs.next(this.mock));
  }

  getChartData(symbol: string) {
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${symbol}?range=1mo&interval=1d`;
    return axios.get(url);
  }

}
