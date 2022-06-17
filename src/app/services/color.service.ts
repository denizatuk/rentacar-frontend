import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient,@Inject("url")private url:string) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath= this.url + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorsById(colorId:number):Observable<ListResponseModel<Color>>{
    let newPath= this.url + "colors/getbyid?colorId="+ colorId
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
