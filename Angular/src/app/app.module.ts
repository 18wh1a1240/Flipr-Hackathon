import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ChartsComponent } from './charts/charts.component';

const appRoot: Routes = [
  { path: '', component:  UserComponent},
  { path: 'login', component:  UserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'chart', component: ChartsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
