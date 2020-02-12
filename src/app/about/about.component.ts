import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, Router } from '@angular/router';
import {States} from './States'; 
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  private s1: boolean;
  stateselected:number;
  state : States[];
  
    
  constructor(private service:AuthService, private mservice:MessageService,public route:Router) 
  {  
    this.s1=false; 
  }

  ngOnInit() 
  {
    this.state = [
      {state:"Alabama",zip:36104},
      {state:"Alaska",zip:99801},
      {state:"Arizona",zip:85001},
      {state:"Arkansas",zip:72201},
      {state:"California",zip:95814},
      {state:"Colorado",zip:80202},
      {state:"Connecticut",zip:0o6103},
      {state:"Delaware",zip:19901},
      {state:"Florida",zip:32301},
      {state:"Georgia",zip:30303},
      {state:"Hawaii",zip:96813},
      {state:"Idaho",zip:83702},
      {state:"Illinois",zip:62701},
      {state:"Indiana",zip:46225},
      {state:"Iowa",zip:50309},
      {state:"Kansas",zip:66603},
      {state:"Kentucky",zip:40601},
      {state:"Louisiana",zip:70802},
    ];
    this.stateselected=36104;
  }
  toggle: boolean=true;
  user=localStorage.getItem('un');
  logout()
  {
    localStorage.removeItem("un");
    this.route.navigate(['/']);
  }
  Getusers()
  {
    
    this.mservice.add(localStorage.getItem('un'));
    this.toggle=!this.toggle;
    console.log(this.mservice.messages);
  }
  Deleteusers() 
  {
    this.mservice.clear();
  }
  
}
