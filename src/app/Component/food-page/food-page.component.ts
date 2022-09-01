import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../../services/food/food-service.service';
import { Food } from '../../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;

  constructor(private activatedRoute:ActivatedRoute, private fs:FoodServiceService) {
    this.activatedRoute.params.subscribe((param) => {
      if(param['id']) this.food= this.fs.getFoodById(param['id']);
    });
      
 
    
   
   }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((param) => {
    //   if(param['id']) this.food= this.fs.getFoodById(param['id']);
      
    // })

    
   
  }

  favoriteRevert(){

    this.food.favorite = !this.food.favorite

  }

}
