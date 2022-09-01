import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-admin-food-list',
  templateUrl: './admin-food-list.component.html',
  styleUrls: ['./admin-food-list.component.css']
})
export class AdminFoodListComponent implements OnInit {

  @Input() foods:Food[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
