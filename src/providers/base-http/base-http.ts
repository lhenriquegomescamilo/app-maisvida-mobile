import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {URL_SERVER} from "../../baseURL";


/*
  Generated class for the BaseHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseHttpProvider {

  constructor(private _http: Http) {
    console.log('Hello BaseHttpProvider Provider');
  }

  public post(url: string, body: any): Observable<any> {
    let header: Headers = new Headers();
    header.set("Content-Type", "application/json");
    return this._http.post(`${URL_SERVER}${url}`, body, header);
  }
}
