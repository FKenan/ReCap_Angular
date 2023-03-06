import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { EntityResponseModel } from 'src/app/models/entityResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  apiUrl = 'https://localhost:44350/api/';
  constructor(private httpClient: HttpClient) {}

  getCard(cardNumber: string): Observable<EntityResponseModel<Card>> {
    let newPath = this.apiUrl + 'cards/getcard?cardNumber=' + cardNumber;
    return this.httpClient.get<EntityResponseModel<Card>>(newPath);
  }

  addCard(card: Card): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cards/add';
    return this.httpClient.post<ResponseModel>(newPath,card);
  }
  
}
