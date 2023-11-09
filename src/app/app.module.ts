import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyHeaderComponent } from './components/currency-header/currency-header.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CurrencyHeaderComponent,
    CurrencyConverterComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
