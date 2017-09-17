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

  private _token: string = '';

  constructor(private _http: Http) {
    console.log('Hello BaseHttpProvider Provider');
  }

  public post(url: string, body: any): Observable<any> {
    let header: Headers = new Headers();
    header.set("Content-Type", "application/json");
    return this._http.post(`${URL_SERVER}${url}`, body, header);
  }

  public get(url: string): Observable<any> {
    return this._http.get(url, this._defaultHeaders());
  }

  private _defaultHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", this._token);
    return headers;
  }

  set token(token: string) {
    this._token = token;
  }

}
