import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { AuthguardsService } from './authguards.service'
//import { ServicesComponent } from './services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
 
@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    VgControlsModule,
    VgCoreModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService,AuthguardsService,MessageService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
