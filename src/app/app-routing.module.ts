import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/Administration/admin/admin.component';
import { AdminhomeComponent } from './Component/Administration/adminhome/adminhome.component';
import { LoginComponent } from './Component/Administration/login/login.component';
import { CartPageComponent } from './Component/cart-page/cart-page.component';
import { FoodPageComponent } from './Component/food-page/food-page.component';
import { HomeComponent } from './Component/home/home.component';
import { PanelComponent } from './Component/panel/panel.component';


const routes: Routes = [

  {path:'', component:PanelComponent,
  children: [
            {path:'', component:HomeComponent},
            {path:'tag/:tags', component:HomeComponent},
            {path:'cart', component:CartPageComponent},
            {
              path:'food/:id',
              component:FoodPageComponent},
              
            {path:'search/:searchItem', component:HomeComponent}
           ]
  },
  {path:'administration', component:AdminComponent,
    children:
     [ {path:'login', component:LoginComponent },
     {path:'home', component:AdminhomeComponent,
    
      children:[{
        path:'Update/:id', component:AdminhomeComponent
      }]
    }

    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
