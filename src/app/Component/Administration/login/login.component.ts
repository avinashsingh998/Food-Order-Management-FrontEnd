import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FoodServiceService } from 'src/app/services/food/food-service.service';
import { Admin } from 'src/app/shared/models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string = '';
 admin:Admin = new Admin();

  constructor(private router:Router, private as:AdminService) { }

  ngOnInit(): void {
  }

  verify(){
    const result = this.as.varify(this.admin);
    result.subscribe(data =>{
      if(data.toLowerCase().includes("success")){
        
     this.router.navigateByUrl('/administration/home');

      }
    
    else{
     this.msg = 'You are not an authorized person....';
     this.admin.username='';
     this.admin.password='';
      this.router.navigateByUrl('/administration/login');
    }},
    error =>{ 
      this.msg = 'Server Error....';
      this.admin.username='';
      this.admin.password='';
       this.router.navigateByUrl('/administration/login');
    });
   

  }
  

}
