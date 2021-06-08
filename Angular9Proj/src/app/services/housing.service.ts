import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/iProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllPropertyList(SellRent:number): Observable<IProperty[]>{
   return this.http.get('data/properties.json').pipe(
     map(data=>{
       const propertyArray:Array<IProperty>=[];
       for(const id in data){
         if(data.hasOwnProperty(id) && data[id].SellRent===SellRent){
          propertyArray.push(data[id]);
         }
       }
       return propertyArray;
     })

   );
  }
}
