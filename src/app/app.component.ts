import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { ExchangeRate } from './models/exchange-rate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  exchangeRates: ExchangeRate[] = [];

  constructor(private productsService: CurrencyService) {}
  ngOnInit(): void {
    this.productsService.getExchangeRates().subscribe((resp) => {
      if (resp && resp.length > 31) {
        const USD = resp[24];
        const EUR = resp[31];
        const rates = [USD, EUR];
        console.log(rates);
        this.exchangeRates = rates;
      }
    });
  }
}
