import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {
        this.getBrandsById(params["brandId"])
      }else{
        this.getBrands();
      }
    })   
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
      this.toastrService.success(response.message)
    })
  }
  getBrandsById(brandId: number) {
    this.brandService.getBrandsById(brandId).subscribe((response)=>{
      this.brands = response.data;
    })
  }

}
