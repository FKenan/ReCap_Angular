import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ImageService } from "src/app/main/services/image.service";
import { RentalService } from "src/app/main/services/rental.service";
import { Card } from "src/app/models/card";
import { Rental } from "src/app/models/rental";
import { rentalDto } from "src/app/models/rentalDto";
import { CreditService } from "../../services/credit.service";

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
})
export class CreditComponent implements OnInit {
  card: Card;
  rentalModel: Rental = {
    id: 0,
    carId: 0,
    customerId: 1,
    rentDate: new Date(),
    returnDate: new Date(),
  };
  isRentalExists: rentalDto;
  cardModel: Card = {
    id: 0,
    customerId: 1,
    nameOnTheCard: 'Kenan Fidan',
    cardNumber: '',
    cvv: 111,
    month: 1,
    year: 2010,
  };
  constructor(
    private creditService: CreditService,
    private toastr: ToastrService,
    private rentalService: RentalService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {}

  rent() {
    if (this.isCardsMatch()) {
      this.fillRentalModel();
      this.rentalService
        .getRentalDetailByCarId(this.imageService.carId)
        .subscribe((response) => {
          this.isRentalExists = response.data;
        });
      if (this.isRentalExists) {
        this.rentalService.updateRental(this.rentalModel).subscribe();
      } else if (this.isRentalExists == null) {
        this.rentalService.addRental(this.rentalModel).subscribe();
      }
      this.toastr.success('Kiralama İşleminiz Gerçekleşti');
    } else {
      this.toastr.error(
        'Kart Doğrulanamadı. Bilgilerinizin Doğruluğunu Kontrol Ediniz!'
      );
    }
  }

  getCard(cardNumber: string) {
    this.creditService.getCard(cardNumber).subscribe((response) => {
      this.card = response.data;
    });
  }

  isCardsMatch() {
    if (
      this.card.nameOnTheCard == this.cardModel.nameOnTheCard &&
      this.card.cardNumber == this.cardModel.cardNumber &&
      this.card.customerId == this.cardModel.customerId &&
      this.card.cvv == this.cardModel.cvv &&
      this.card.month == this.cardModel.month &&
      this.card.year == this.cardModel.year
    ) {
      return true;
    }
    return false;
  }

  cardNumberChange(value: string) {
    if (value.length == 16) {
      this.getCard(value);
    }
  }

  fillRentalModel() {
    this.rentalModel.id = this.imageService.rentalId;
    this.rentalModel.carId = this.imageService.carId;
    this.rentalModel.customerId = this.imageService.customerId;
    this.rentalModel.rentDate = this.imageService.newRentDate;
    this.rentalModel.returnDate = this.imageService.newReturnDate;
  }
}
