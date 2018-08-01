import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyService {
private _url = "assets/contacts.json";
  constructor(private http: HttpClient) {}
  getService(): Observable<any> {
    return this.http.get(this._url).pipe(map ((response: Response) => {
      debugger;
      return response.json;
    }));
  }
}
