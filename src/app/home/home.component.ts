import { Component, OnInit } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent  
{
  constructor(private datePipe: DatePipe)
  {
      
  }
  public minDate: Date = new Date ("08/15/1947");
    public maxDate: Date = new Date ("12/31/2020");
    public value: Date = new Date ();
    start = this.datePipe.transform(this.value, 'MM-dd-yyyy');
    
}

