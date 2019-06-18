import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
//import { OfferModel } from '../Models/OfferModel';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(public api: Api) { }

  getAllOffers(pageNumber: number, pageLimit: number) {
    return this.api.get("offers?page=" + pageNumber + "&limit=" + pageLimit);
  }

  getVipOffers() {
    return this.api.get("offers/vip");
  }
  
  // NewOffer(offer: OfferModel) {   
  //   const formData: FormData = new FormData();
  //   for (var key in offer) {
  //     formData.append(key, offer[key]);
  //   }    
  //   return this.api.post("offers/add", formData);
  // }
  GetOfferById(offerId: string) {
    return this.api.get("offers/" + offerId);
  }
  // UpdateOffer(offer: OfferModel) {
  //   return this.api.put("offers/" + offer._id, offer);
  // }

  DeleteOffer(offerId:string) {
    return this.api.delete("offers/" + offerId);
  }


}
