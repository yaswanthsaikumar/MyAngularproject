import { Component, OnInit } from '@angular/core';
//import { Register } from './register/register.component';
import { Routes, Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { access } from 'fs';
//import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: any;
  private password:any;
  public status1: any;
  //private fusername: any;
  //private data:any;
  public status: boolean;
  showdata:boolean=false;
  //currentuser: User;
  constructor(private service:AuthService, public route:Router) {
      this.status=false;
   }

  ngOnInit() {
  }
  loginUser() {
    
    if((this.username!==undefined && this.username!==null && this.username!=="")&&(this.password!==undefined && this.password!==null && this.password!==""))
    {
      
      let resp=this.service.login(this.username,this.password)
      
      resp.subscribe(data => { 
        //localStorage.setItem('access_token',this.data.access_token);
      for(var i=0;i<data.length;i++){
      if(data[i].username==this.username && data[i].password==this.password)
           {
    
            
            this.status = true;
            console.log("routing....");
            
            localStorage.setItem('un',this.username);
            
            this.route.navigate(['/about']);
           }
           else{
             this.status=false;
            this.status1="data you entered is not in database";
          
          }
          }
        })
        
      
  }
    else
    {
      this.status1="Enter valid username and password";
     // this.route.navigate(['./about']);
    }
  
}

}