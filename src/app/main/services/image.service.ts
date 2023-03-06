import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import { ListResponseModel } from '../../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = 'https://localhost:44350/api/carimages/';

  rentalId: number=0;
  carId: number =0;
  customerId: number = 1;

  newRentDate: Date;
  newReturnDate: Date;

  constructor(private httpClient: HttpClient) {}

  getImagesByCarId(carId: number): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + 'getimagebycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
}
