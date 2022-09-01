import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food/food-service.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private fs:FoodServiceService, private router:ActivatedRoute) {

  } 


  

      ngOnInit(): void {
                    this.router.params.subscribe(param => {
                            if(param['searchItem'])
                                this.fs.getAll().subscribe(data => {
                                  if(data){
                                  
                                  this.foods = data.filter((food: { name: string; }) => food.name.toLowerCase().includes(param['searchItem'].toLowerCase()));}
                                });
                              

                            else if(param['tags'] && param['tags'] != 'All') 
                                this.fs.getAll().subscribe(data => {
                                  if(data){
                                  this.foods = data.filter((food: { tags: string | any[]; }) => food.tags.includes(param['tags']));}

                          
                              });
                        
                        else
                            this.fs.getAll().subscribe(data => {
                              if(data){
                                
                              this.foods = data;}
                        });
                    });

                }
  
}
