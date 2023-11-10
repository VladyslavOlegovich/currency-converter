import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ExchangeRate } from '../models/exchange-rate';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

  constructor(private http: HttpClient) {}

  public getExchangeRates(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('An error occurred when receiving exchange rates', error);
        return throwError('An error occurred when receiving exchange rates');
      }),
      map((response) => {
        const USD = response.find((rate) => rate.cc === 'USD');
        const EUR = response.find((rate) => rate.cc === 'EUR');
        return USD && EUR ? [USD, EUR] : [];
      })
    );
  }
}
