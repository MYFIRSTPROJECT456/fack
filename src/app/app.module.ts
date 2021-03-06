import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//custome
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
//all servieses
import { StateService } from './service/state.service';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './state/list/list.component';
import { CreateComponent } from './state/create/create.component';
import { UpdateComponent } from './state/update/update.component';
import { CreatecityComponent } from './city/createcity/createcity.component';
import { CitylistComponent } from './city/citylist/citylist.component';
import { UpdatecityComponent } from './city/updatecity/updatecity.component';
import { LocalitylistComponent } from './locality/localitylist/localitylist.component';
import { CreatelocalityComponent } from './locality/createlocality/createlocality.component';
import { UpdatelocalityComponent } from './locality/updatelocality/updatelocality.component';
import { CategorylistComponent } from './category/categorylist/categorylist.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { CreateusersComponent } from './users/createusers/createusers.component';
import { UpdateusersComponent } from './users/updateusers/updateusers.component';
import { AdslistComponent } from './ads/adslist/adslist.component';
import { UpdateadsComponent } from './ads/updateads/updateads.component';
import { CreateadsComponent } from './ads/createads/createads.component';

const routes:Routes = [
  { path:'', redirectTo: '/statelist', pathMatch: 'full' },
  { path: 'create', component:CreateComponent },
  { path: 'statelist', component:ListComponent },
  { path: 'update/:sid', component:UpdateComponent },
  { path:'citylist', component:CitylistComponent },
  { path:'createcity', component:CreatecityComponent },
  { path:'updatecity/:id', component:UpdatecityComponent },
  { path:'localitylist', component:LocalitylistComponent },
  { path:'createlocality', component:CreatelocalityComponent },
  { path:'updatelocality/:id', component:UpdatelocalityComponent },
  { path:'categorylist', component:CategorylistComponent },
  { path:'createcategory', component:CreatecategoryComponent },
  { path:'updatecategory/:id', component:UpdatecategoryComponent },
  { path:'userslist', component:UserslistComponent },
  { path:'createusers', component:CreateusersComponent },
  { path:'updateusers/:id', component:UpdateusersComponent },
  { path:'adslist', component:AdslistComponent },
  { path:'createads', component:CreateadsComponent },
  { path:'updateads/:id', component:UpdateadsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    CreatecityComponent,
    CitylistComponent,
    UpdatecityComponent,
    LocalitylistComponent,
    CreatelocalityComponent,
    UpdatelocalityComponent,
    CategorylistComponent,
    CreatecategoryComponent,
    UpdatecategoryComponent,
    UserslistComponent,
    CreateusersComponent,
    UpdateusersComponent,
    AdslistComponent,
    UpdateadsComponent,
    CreateadsComponent
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
