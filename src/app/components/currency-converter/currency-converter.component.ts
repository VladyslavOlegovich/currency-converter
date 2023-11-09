import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRate } from '../../models/exchange-rate';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  exchangeRates: ExchangeRate[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data;
      // Опрацьовуємо дані і оновлюємо UI
    });
  }
}
