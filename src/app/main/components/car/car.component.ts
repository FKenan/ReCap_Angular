import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/main/services/brand.service';
import { CarService } from 'src/app/main/services/car.service';
import { ColorService } from 'src/app/main/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  dataLoaded = false;
  currentCar: CarDetail;
  filterText = '';
  selectedBrand: number = 0;
  selectedColor: number = 0;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorid'] && params['brandid']) {
        this.getCarsByBrandAndColor(params['brandid'], params['colorid']);
      } else if (params['colorid']) {
        this.getCarsByColor(params['colorid']);
      } else if (params['brandid']) {
        this.getCarsByBrand(params['brandid']);
      } else {
        this.getCars();
      }
    });

    this.getBrands();
    this.getColors();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarsByBrandAndColor(this.selectedBrand, this.selectedColor)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }

  setCurrentCar(car: CarDetail) {
    this.currentCar = car;
  }

  getSelectedColor(colorId: number) {
    if (this.selectedColor == colorId) return true;
    else return false;
  }
  getSelectedBrand(brandId: number) {
    if (this.selectedBrand == brandId) return true;
    else return false;
  }
}
