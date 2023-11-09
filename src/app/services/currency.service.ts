import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRate } from '../models/exchange-rate';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
  constructor(private http: HttpClient) {}
  public getExchangeRates(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(this.apiUrl);
  }
}
