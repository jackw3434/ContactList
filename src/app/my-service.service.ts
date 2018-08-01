import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
private _url = "contacs.json";
  constructor(private _http: Http) {}
  getService(): Observable<any> {
    return this._http.get(this._url)
    .map ((response: Response) => <any> response.json)
  }
}
