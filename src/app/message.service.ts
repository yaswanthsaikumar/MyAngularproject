import { Injectable } from '@angular/core';

import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  us:string;
  
  constructor() { }
  messages: string[]=[];
  add(message)
  {
    if(message!=undefined && this.us!=message)
    {
      this.us=message;
     this.messages.push(message);
     
    }
}
  clear()
  {
    this.messages = [];
  }
}
