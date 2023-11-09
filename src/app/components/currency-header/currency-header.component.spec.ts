import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHeaderComponent } from './currency-header.component';
import { CurrencyService } from '../../services/currency.service';
import { of } from 'rxjs';
import { ExchangeRate } from 'src/app/models/exchange-rate';
describe('CurrencyHeaderComponent', () => {
  let component: CurrencyHeaderComponent;
  let fixture: ComponentFixture<CurrencyHeaderComponent>;
  let currencyServiceSpy: jasmine.SpyObj<CurrencyService>;

  beforeEach(() => {
    currencyServiceSpy = jasmine.createSpyObj('CurrencyService', [
      'getExchangeRates',
    ]);
    TestBed.configureTestingModule({
      declarations: [CurrencyHeaderComponent],
    });
    fixture = TestBed.createComponent(CurrencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display exchange rates correctly', () => {
    const mockRates: ExchangeRate[] = [
      {
        r030: 840,
        txt: 'USD',
        rate: 1.2,
        cc: 'USD',
        exchangedate: '2023-11-09',
      },
      {
        r030: 978,
        txt: 'EUR',
        rate: 1.5,
        cc: 'EUR',
        exchangedate: '2023-11-09',
      },
    ];
    currencyServiceSpy.getExchangeRates.and.returnValue(of(mockRates));

    fixture.detectChanges();

    // Перевіряємо, чи вірно відображаються курси валют в шаблоні
    const usdRateElement = fixture.nativeElement.querySelector('.usd-rate');
    const eurRateElement = fixture.nativeElement.querySelector('.eur-rate');

    expect(usdRateElement.textContent).toContain('USD Rate: 1.2');
    expect(eurRateElement.textContent).toContain('EUR Rate: 1.5');
  });
});
