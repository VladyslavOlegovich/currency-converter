import { Component, OnInit, Input } from '@angular/core';
import { ExchangeRate } from 'src/app/models/exchange-rate';
import { CurrencyService } from '../../services/currency.service';
@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css'],
})
export class CurrencyHeaderComponent implements OnInit {
  exchangeRates: ExchangeRate[] = [];

  constructor(private currencyService: CurrencyService) {}
  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data;
    });
  }
}
