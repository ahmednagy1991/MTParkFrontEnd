import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
//import { CompanyModel } from '../Models/CompanyModel';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  // companyName: string;
  // companyPhone: string;

  constructor(public api: Api) { }

  GetAllCompanies(): Observable<any> {
    return this.api.get("companies");
  }
  // NewCompany(company: CompanyModel) {
  //   return this.api.post("companies/add", company);
  // }
  // GetCompanyById(companyId: string) {
  //   return this.api.get("companies/" + companyId);
  // }
  // UpdateCompany(company: CompanyModel) {
  //   return this.api.put("companies/" + company._id, company);
  // }
  DeleteCompany(company: string) {
    return this.api.delete("companies/" + company);
  }
}



