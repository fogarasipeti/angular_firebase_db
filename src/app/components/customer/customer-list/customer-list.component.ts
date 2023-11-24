import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  public customers: CustomerModel[] = [];
  // customers: CustomerModel[] = [
  //   {
  //     customerNo: 1,
  //     name: 'Rahuld Dravid',
  //     address: '',
  //     city: 'Banglaore',
  //     state: 'Karnataka',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 2,
  //     name: 'Sachin Tendulkar',
  //     address: '',
  //     city: 'Mumbai',
  //     state: 'Maharastra',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 3,
  //     name: 'Saurrav Ganguly',
  //     address: '',
  //     city: 'Kolkata',
  //     state: 'West Bengal',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 4,
  //     name: 'Mahendra Singh Dhoni',
  //     address: '',
  //     city: 'Ranchi',
  //     state: 'Bihar',
  //     country: 'India',
  //   },
  //   {
  //     customerNo: 5,
  //     name: 'Virat Kohli',
  //     address: '',
  //     city: 'Delhi',
  //     state: 'Delhi',
  //     country: 'India',
  //   },
  // ];

  constructor(private customerService: CustomerService) {}

  // manuális betöltés gombbal
  async resetDb(): Promise<void> {
    await this.customerService.initializeDb();
    this.customerService.getCustomers().subscribe({
      next: (data: CustomerModel[]) => {
        this.customers = data;
      },
    });
  }

  ngOnInit(): void {}
  // automatikus betöltés

  // ngOnInit(): void {
  //   this.customerService.getCustomers().subscribe({
  //     next: (data: CustomerModel[]) => {
  //       this.customers = data;
  //     },
  //   });
  // }
}
