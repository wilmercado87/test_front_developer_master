import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnChanges{
  @Input() customerSlug: string; // slug instance variable of InfoComponent
  customers = [
    {slug: 'henry-gerard', firtName: "Henry", lastName: "Gerard", age: 21, company: 'Livershool', gender: 'Male', customerID: '3123', country: 'India', state: 'TN'},
    {slug: 'michael-platini', firtName: "Michael", lastName: "Platini", age: 40, company: 'Czecha', gender: 'Male', customerID: '3198', country:'USA', state:'SF'},
    {slug: 'louis-figo', firtName: "Louis", lastName: "Figo", age: 37, company: 'Reala Madrida', gender: 'Male', customerID: '3176', country: 'France', state: 'PA'},
    {slug: 'cristiana-ronaldinho', firtName: "Cristiana", lastName: "Ronaldinho", age: 15, company: 'Portugalia', gender: 'Female', customerID: '3178', country: 'Portugal', state: 'LB'},
    {slug:'leonardo-messiah', firtName:"Leonardo", lastName: "Messiah", age: 25, company: 'Barceloja', gender: 'Female', customerID:'3165', country: 'Argentina', state: 'BA'}
  ];

  customer: any;

  ngOnChanges(){
    this.customer = this.customers.find(e => e.slug == this.customerSlug);
  }

  constructor() {
    
  }

  


}
