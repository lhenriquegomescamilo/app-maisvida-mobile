import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DoctorProvider} from "../../providers/doctor/doctor";
import {Doctor} from "../../models/doctor";

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

  private _doctors: Array<Doctor> = new Array<Doctor>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private _doctorProvider: DoctorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorListPage');
    this._doctorProvider.findAll()
      .subscribe(doctors => {

        this._doctors = doctors;
      });
  }

  get doctors() {
    return this._doctors;
  }

}
