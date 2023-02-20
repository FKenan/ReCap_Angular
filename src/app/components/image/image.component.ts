import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Image } from 'src/app/models/image';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  images: Image[];
  selectedCar: CarDetail;
  rentalDetail: Rental;
  constructor(
    private imageService: ImageService,
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute
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
    let date = new Date(this.rentalDetail.returnDate);
    console.log(date.valueOf()  +"- - -"+ Date.now())
    console.log(date.valueOf() < Date.now())
    return date.valueOf() < Date.now() ;
    
  }
}
