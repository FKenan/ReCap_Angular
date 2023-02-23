import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Image } from 'src/app/models/image';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/main/services/car.service';
import { ImageService } from 'src/app/main/services/image.service';
import { RentalService } from 'src/app/main/services/rental.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  images: Image[];
  selectedCar: CarDetail;
  rentalDetail: Rental | undefined;
  newRentDate: Date;
  newReturnDate: Date;
  date: Date;
  time: Date;
  constructor(
    private imageService: ImageService,
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carid']) {
        this.getImagesByCarId(params['carid']);
        this.getCarById(params['carid']);
        this.getRentalByCarId(params['carid']);
      }
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.selectedCar = response.data;
    });
  }

  getImagesByCarId(carId: number) {
    this.imageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
    });
  }

  getRentalByCarId(carId: number) {
    this.rentalService.getRentalByCarId(carId).subscribe((response) => {
      this.rentalDetail = response.data;
    });
  }

  getImageUrl(image: Image) {
    return 'https://localhost:44350/Uploads/Images/' + image.imagePath;
  }

  isRentable(): boolean {
    if (this.rentalDetail) {
      let date = new Date(this.rentalDetail.returnDate);
      return date.valueOf() < Date.now();
    }
    return false;
  }

  checkDateAndTime() {
    if (this.rentalDetail) {
      let date = new Date(this.date.toString() + ' ' + this.time);
      this.newRentDate = new Date();
      this.newReturnDate = date;
    }
    if (this.newRentDate && this.newReturnDate) {
      this.route.navigateByUrl('/credit');
    }
  }

  getDate() {
    let date = new Date();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return `${year}-${month}-${day}`;
  }
}
