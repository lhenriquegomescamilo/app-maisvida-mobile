import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {BaseHttpProvider} from "../base-http/base-http";
import {User} from "../../User";


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

  findTokenByUsernameAndPassword(user: User): void {
    this._baseHttp.post("/login", user)
      .map((response: Response) =>  response.headers.get("authorization"))
      .subscribe(body => this._baseHttp.token = body);
  }

}
