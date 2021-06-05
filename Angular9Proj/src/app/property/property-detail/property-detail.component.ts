import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyid:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.propertyid=this.route.snapshot.params['Id'];
  }

}
