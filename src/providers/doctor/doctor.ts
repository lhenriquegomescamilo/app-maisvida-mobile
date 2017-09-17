import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Doctor} from "../../models/doctor";
import {BaseHttpProvider} from "../base-http/base-http";

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

  create(doctor: Doctor) {
    this._baseHttp.post(DoctorProvider.BASE_APP_MAISVIDA_URL, doctor)
      .subscribe(body => {
        console.log(body);
      }, error => {
        console.log(error);
      });
  }
}
