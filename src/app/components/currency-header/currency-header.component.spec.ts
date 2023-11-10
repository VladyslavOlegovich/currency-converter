import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
      providers: [CurrencyService],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CurrencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
