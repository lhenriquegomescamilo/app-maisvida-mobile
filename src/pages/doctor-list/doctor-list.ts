import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctorProvider} from "../../providers/doctor/doctor";
import {DoctorShowPage} from "../doctor-show/doctor-show";
import {DoctorEditPage} from "../doctor-edit/doctor-edit";

/**
 * Generated class for the DoctorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {

  private _doctors = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _doctorProvider: DoctorProvider) {

  }

  ionViewWillEnter() {
    this._doctorProvider
      .findAll()
      .subscribe(doctors => this._doctors = doctors
        , error => console.log(error));
  }

  get doctors() {
    return this._doctors;
  }

  editDoctor(doctor): void {
    this.navCtrl.push(DoctorEditPage, {parameter: doctor});
  }

  showDoctor(doctor): void {
    this.navCtrl.push(DoctorShowPage, {parameter: doctor});
  }

}
