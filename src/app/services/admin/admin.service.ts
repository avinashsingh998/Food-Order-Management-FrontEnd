import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/shared/models/admin';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  varify(admin:Admin):Observable<string>{
   
    const okl =  this.http.post(this.baseUrl+"administration/verify", admin,  {responseType: 'text'});
    return okl;

  }

  addFood(food:Food):Observable<any>{


    // const formData = new FormData();
    // formData.append("cooktime", food.cookTime);
    // formData.append("name", food.name)
    // var origins1 = '';
    // var tags1 = '';

    // food.tags.forEach(tag => {
    //   tags1+=tag+"###";
    // })
    // formData.append("tags", tags1);


    // food.origins.forEach(origin =>{
    //     origins1+=origin+"###"
    // });
    // formData.append("origins", origins1);
    
    // formData.append("price", food.price.toString());
    // formData.append("imageUrl", food.imageUrl);


   
    console.log(food);
  var result =  this.http.post(this.baseUrl+"administration/home/add", food,  {responseType: 'text'}, );
  console.log("checkpoint3")
  result.subscribe(data => console.log("data : "+data), error => console.log("error : "+error))
		return result;
  }


}
