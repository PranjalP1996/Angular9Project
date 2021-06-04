import { Component } from "@angular/core";


@Component({
  selector:'app-property-card',
  templateUrl
  :'property-card.Component.html',
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{

  Property: any={
        "Id":1,
        "Type":"House",
        "Price":15000
      }
}
