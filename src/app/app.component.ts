import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Contact_Service = [];
  constructor(private _myService: MyServiceService){}
  ngOnInit(){
    this._myService.getService().subscribe()
  }
  title = 'sample-list';
}
