import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[]=[];

  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["customerId"]) {
        this.getCustomersById(params["customerId"])
      } else {
        this.getCustomers();
        
      }
    })
  }
  getCustomers() {
    this.customerService.getCustomer().subscribe((response)=>{
      this.customers= response.data;
      this.toastrService.success(response.message)
    })
  }
  getCustomersById(customerId: number) {
    this.customerService.getCustomerById(customerId).subscribe((response)=>{
      this.customers=response.data;
    })
  }

}
