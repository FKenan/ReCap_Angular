import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { rentalDto } from 'src/app/models/rentalDto';
import { EntityResponseModel } from '../../models/entityResponseModel';
import { ListResponseModel } from '../../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44350/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<rentalDto>> {
    let newPath = this.apiUrl + 'getrentaldetails';
    return this.httpClient.get<ListResponseModel<rentalDto>>(newPath);
  }

  getRentalDetailByCarId(carId: number): Observable<EntityResponseModel<rentalDto>> {
    let newPath = this.apiUrl + 'getrentaldetailbycarid?carId=' + carId;
    return this.httpClient.get<EntityResponseModel<rentalDto>>(newPath);
  }

  addRental(rental: Rental): Observable<EntityResponseModel<Rental>> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<EntityResponseModel<Rental>>(newPath, rental);
  }

  updateRental(rental: Rental): Observable<EntityResponseModel<Rental>> {
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<EntityResponseModel<Rental>>(newPath, rental);
  }

  getRentalByCarId(carId:number): Observable<EntityResponseModel<Rental>> {
    let newPath = this.apiUrl + 'getrentalbycarid?carid=' + carId;
    return this.httpClient.get<EntityResponseModel<Rental>>(newPath);
  }
}
