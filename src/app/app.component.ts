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
  // exchangeRates: ExchangeRate[] = [];

  constructor(private productsService: CurrencyService) {}
  ngOnInit(): void {
    // this.productsService.getExchangeRates().subscribe((response) => {
    //   const USD = response.find((rate) => rate.cc === 'USD');
    //   const EUR = response.find((rate) => rate.cc === 'EUR');
    //   if (USD && EUR) {
    //     const rates = [USD, EUR];
    //     this.exchangeRates = rates;
    //   }
    // });
  }
}
