import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {BaseHttpProvider} from "../base-http/base-http";
import {User} from "../../models/User";
import {Observable} from "rxjs/Observable";


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(private _baseHttp: BaseHttpProvider) {
    console.log('Hello LoginProvider Provider');
  }

  findTokenByUsernameAndPassword(user: User): Observable<any> {
    return this._baseHttp.post("/login", user)
      .map((response: Response) => response.headers.get("authorization"))
      .do(body => this._baseHttp.token = body);
  }

}
