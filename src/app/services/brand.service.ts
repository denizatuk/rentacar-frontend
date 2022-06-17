import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient,@Inject("url")private url:string) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.url + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getBrandsById(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath=this.url + "brands/getbyid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
