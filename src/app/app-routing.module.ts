import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { AuthguardsService } from './authguards.service';
import { MessageService } from './message.service';

const routes: Routes = 
[
         {path: '', 
          component:HomeComponent}, 
          {path: 'login', 
          component:LoginComponent },
          {path:'register', 
          component:RegisterComponent },
          {path:'about', 
          component:AboutComponent, canActivate: [AuthguardsService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
      
 }
