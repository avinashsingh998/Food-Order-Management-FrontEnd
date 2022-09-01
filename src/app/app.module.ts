import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './Component/cart-page/cart-page.component';
import { FoodPageComponent } from './Component/food-page/food-page.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { SearchComponent } from './Component/search/search.component';
import { TagsComponent } from './Component/tags/tags.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { LoginComponent } from './Component/Administration/login/login.component';
import { AdminhomeComponent } from './Component/Administration/adminhome/adminhome.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFoodComponent } from './Component/Administration/add-food/add-food.component';
import { AdminComponent } from './Component/Administration/admin/admin.component';
import { PanelComponent } from './Component/panel/panel.component';
import { AdminFoodListComponent } from './Component/Administration/admin-food-list/admin-food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    SideBarComponent,
    LoginComponent,
    AdminhomeComponent,
    AddFoodComponent,
    AdminComponent,
    PanelComponent,
    AdminFoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
