import { Component, Input } from '@angular/core';
import { ExchangeRate } from 'src/app/models/exchange-rate';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css'],
})
export class CurrencyHeaderComponent {
  @Input() exchangeRates: ExchangeRate[] = [];
}
