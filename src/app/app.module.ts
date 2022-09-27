import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { LoginComponent } from './components/login/login.component';

 const appRoutes: Routes =[
  {path:"", component:TasksComponent},
  {path:"login", component:LoginComponent},
  {path:"addtask", component:AddTaskComponent}
 ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
