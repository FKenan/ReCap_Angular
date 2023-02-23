import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditLayoutComponent } from './credit/credit-layout/credit-layout.component';
import { CarComponent } from './main/components/car/car.component';
import { ImageComponent } from './main/components/image/image.component';
import { MainLayoutComponent } from './main/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CarComponent },
      { path: 'cars', component: CarComponent },
      { path: 'cars/brand/:brandid', component: CarComponent },
      { path: 'cars/color/:colorid', component: CarComponent },
      { path: 'cars/:carid', component: ImageComponent },
      { path: 'cars/brand/:brandid/color/:colorid', component: CarComponent },
    ],
  },
  { path: 'credit', component: CreditLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
