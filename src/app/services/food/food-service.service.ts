import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  
  baseUrl:string = "http://localhost:8080/";

  foods:Food[] = [];
  food!: Food;
  
  
  constructor(private http:HttpClient) { }

  getFoodById(id:Number):Food{

    

    const food1 =  this.http.get<Food>(this.baseUrl+"food?id="+id);
  food1.subscribe(data => {
    this.food = data;
  })
  return this.food;
  }

  getAllTags(): Tag[]{

    return[
      {name:'All', count:10},
      {name:'Breakfast', count:7},
      {name:'Non-veg', count:4},
      {name:'Dinner', count:2},
      {name:'Veg', count:5},
      {name:'Desserts', count:3},
      {name:'Lunch', count:1},
      {name:'Slow-Food', count:2}
    ];
  }

  getAll(): Observable<Food[]>{
    
  const foods1 =  this.http.get<Food[]>(this.baseUrl+"foods");
  foods1.subscribe(data => {
    this.foods = data;
  })
  return foods1;
  }
}
