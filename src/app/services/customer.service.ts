import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient,@Inject("url")private url:string) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    let newPath= this.url + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  
  getCustomerById(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath= this.url + "customers/getbyid?customerId"+customerId
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
