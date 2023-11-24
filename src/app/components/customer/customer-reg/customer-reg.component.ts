import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css'],
})
export class CustomerRegComponent implements OnInit {
  customerRegForm: FormGroup = new FormGroup({
    customerNo: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  get customerNo() {
    return this.customerRegForm.get('customerNo');
  }

  get name() {
    return this.customerRegForm.get('name');
  }

  get address() {
    return this.customerRegForm.get('address');
  }

  get city() {
    return this.customerRegForm.get('city');
  }

  get state() {
    return this.customerRegForm.get('state');
  }

  get country() {
    return this.customerRegForm.get('country');
  }

  constructor() {}

  ngOnInit(): void {}

  async submitRegForm() {
    console.log(this.customerRegForm.value);
  }
}
