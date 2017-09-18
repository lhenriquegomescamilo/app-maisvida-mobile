import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Doctor} from "../../models/doctor";
import {BaseHttpProvider} from "../base-http/base-http";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {
  private static readonly BASE_APP_MAISVIDA_URL = "/app-maisvida/doctor/";

  constructor(private _baseHttp: BaseHttpProvider) {
    console.log('Hello DoctorProvider Provider');
  }

  create(doctor: Doctor): Observable<any> {
    return this._baseHttp.post(DoctorProvider.BASE_APP_MAISVIDA_URL, doctor);
  }

  findAll(): Observable<any> {
    return this._baseHttp
      .get(DoctorProvider.BASE_APP_MAISVIDA_URL)
      .map((response: Response) => response.json());
  }

  update(doctor: Doctor): Observable<any> {
    console.log('update¬', doctor);
    return this._baseHttp
      .update(`${DoctorProvider.BASE_APP_MAISVIDA_URL}`, doctor)
      .map((response: Response) => response.json());
  }
}
