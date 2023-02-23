import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditLayoutComponent } from './credit/credit-layout/credit-layout.component';
import { MainModule } from './main/main.module';
import { CreditModule } from './credit/credit.module';
import { MainLayoutComponent } from './main/components/main-layout/main-layout.component';
import { NaviComponent } from './main/components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MainLayoutComponent,
    CreditLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MainModule,
    CreditModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
