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
  firstCurrencyAmount: number = 1;
  secondCurrencyAmount: number = 1;
  firstCurrencyType: string = 'UAH';
  secondCurrencyType: string = 'EUR';
  lastChanged: 'first' | 'second' = 'first';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data;
      this.convertCurrency('first');
    });
  }
  private performCurrencyConversion(): number {
    const firstCurrencyRate =
      this.getExchangeRate(this.firstCurrencyType)?.rate || 1;
    const secondCurrencyRate =
      this.getExchangeRate(this.secondCurrencyType)?.rate || 1;

    if (this.lastChanged === 'first' && this.firstCurrencyAmount !== null) {
      return (
        (this.firstCurrencyAmount * firstCurrencyRate) / secondCurrencyRate
      );
    } else if (this.secondCurrencyAmount !== null) {
      return (
        (this.secondCurrencyAmount * secondCurrencyRate) / firstCurrencyRate
      );
    }
    return 0;
  }
  private roundToTwoDecimalPlaces(value: number): number {
    return parseFloat(value.toFixed(2));
  }
  convertCurrency(lastChanged: 'first' | 'second'): void {
    this.lastChanged = lastChanged;
    const convertedValue = this.performCurrencyConversion();
    if (this.lastChanged === 'first' && this.firstCurrencyAmount !== null) {
      this.secondCurrencyAmount = this.roundToTwoDecimalPlaces(convertedValue);
    } else if (this.secondCurrencyAmount !== null) {
      this.firstCurrencyAmount = this.roundToTwoDecimalPlaces(convertedValue);
    }
  }

  onCurrencyTypeChange(): void {
    this.convertCurrency(this.lastChanged);
  }

  onFirstCurrencyAmountChange(amount: string): void {
    this.firstCurrencyAmount = parseFloat(amount) || 0;
    this.convertCurrency('first');
  }

  onSecondCurrencyAmountChange(amount: string): void {
    this.secondCurrencyAmount = parseFloat(amount) || 0;
    this.convertCurrency('second');
  }

  private getExchangeRate(currencyType: string): ExchangeRate | undefined {
    return this.exchangeRates.find((rate) => rate.cc === currencyType);
  }
}
