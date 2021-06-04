import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any>=[
    {"Id":1,"Type":"House","Price":15000,"Name":"1BHK"},
    {"Id":2,"Type":"House","Price":18000,"Name":"2BHK"},
    {"Id":3,"Type":"House","Price":10000,"Name":"3BHK"}]

  constructor() { }

  ngOnInit(): void {
  }

}
