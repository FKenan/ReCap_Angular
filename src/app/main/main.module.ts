import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CreditComponent } from '../creditPage/components/credit/credit.component';
import { CreditModule } from '../creditPage/credit.module';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ImageComponent } from './components/image/image.component';
import { RentalComponent } from './components/rental/rental.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    CarComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    ColorComponent,
    ImageComponent,
    FilterPipePipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ColorComponent, BrandComponent],
})
export class MainModule {}
