import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colors:Color[]=[];
  constructor(private colorService:ColorService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["colorId"]) {
        this.getColorsById(params["colorId"])
      }else{
        this.getColors();
      }
    })
  }
  getColors() {this.colorService.getColors().subscribe((response)=>{
    this.colors=response.data;
    this.toastrService.success(response.message)
  })
  }
  getColorsById(colorId:number) {
    this.colorService.getColorsById(colorId).subscribe((response)=>{
      this.colors = response.data;
    })
  }
  

}
