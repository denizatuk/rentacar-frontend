import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["Id"]) {
        this.getCarsById(params["Id"])
        
      }else{
        this.getCars();
      }
      
    })
  }
  getCars() {
    this.carService.getCars().subscribe((response)=>{
      this.cars = response.data;
      this.toastrService.success(response.message)
    })
  }
  getCarsById(Id: number) {
    this.carService.getCarsById(Id).subscribe((response)=>{
      this.cars = response.data;
    })
  }

}
