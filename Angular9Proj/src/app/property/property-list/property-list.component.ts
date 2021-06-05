import{HousingService} from 'src/app/services/housing.service'
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { IProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty>;
  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllPropertyList().subscribe(
        data=>{
        this.Properties=data;
       }, error=>{
         console.log(error);
       }
     );


    //this.http.get('data/properties.json').subscribe(
     // data=>{
     //   this.Properties=data;
    //  }
    //);
  }

}
