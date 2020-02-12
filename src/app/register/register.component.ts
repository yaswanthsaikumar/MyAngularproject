import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userName:any;
  public Email:any;
  public password:any;
  public password_confirm:any;
  private status:any;
  private status1:any;
  private value:boolean;
  constructor(private route:Router) { 
    this.value= false;
  }
  
  ngOnInit() {
  }
  loginUser()
  {
    if((this.userName !== undefined && this.userName !== null && this.userName !== "") && 
    (this.Email !== undefined && this.Email !== null && this.Email !== "") && (this.password !== undefined && this.password !== null && this.password !== ""))
  {
    if(this.password!==this.password_confirm)
    {
      this.status1="Passwords conflicted";
      this.status="Not registered yet";
    }
    else
    {
      this.value=true;
      this.status="Registered succesfully";
      this.route.navigate(['/login']);
    }
  }
  else
    {
      this.status="Please register with proper username and email"
    }
    

}
}
