import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultPricesService {

  constructor(private _http: HttpClient) { }

  getPrices(asset: string): Observable<any> {
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${asset}?range=1mo&interval=1d`;
    return this._http.get<any>(url);
  }

}
