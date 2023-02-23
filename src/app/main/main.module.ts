import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from 'src/app/main/pipes/filter-pipe.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ImageComponent } from './components/image/image.component';
import { RentalComponent } from './components/rental/rental.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, AppRoutingModule, HttpClientModule, FormsModule],
  exports: [ColorComponent, BrandComponent],
})
export class MainModule {}
