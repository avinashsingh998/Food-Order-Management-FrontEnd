import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food/food-service.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private fs:FoodServiceService) { }

  ngOnInit(): void {

    this.fs.getAll().subscribe(data => {
      if(data) this.foods = data;
    })
  }

}
