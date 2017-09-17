import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {URL_SERVER} from "../../baseURL";
import * as _ from 'lodash';

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
    let header: Headers = this._defaultHeaders();
    let urlCompiled = `${URL_SERVER}${url}`;
    return this._http.post(urlCompiled, body, {headers: header});
  }


  public get(url: string): Observable<any> {
    return this._http.get(url, this._defaultHeaders());
  }

  private _defaultHeaders(): Headers {
    let objectToHeader = {};

    if (!_.isEmpty(this._token)) {
      objectToHeader = {"Authorization": this._token};
    }
    let headers: Headers = new Headers(objectToHeader);
    return headers;
  }

  set token(token: string) {
    this._token = token;
  }

}
