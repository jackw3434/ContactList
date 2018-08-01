import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Contact_Array = [];
  constructor(private _myService: MyService){}
  ngOnInit(){
    this._myService.getService().subscribe(data => this.Contact_Array = data)
  }
  title = 'sample-list';
}
