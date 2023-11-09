import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css'],
})
export class CurrencyHeaderComponent {
  @Input() data: any;
}
