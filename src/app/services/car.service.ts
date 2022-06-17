import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient,@Inject("url")private url:string) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.url + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsById(Id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.url + "cars/getbyid?id="+Id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
