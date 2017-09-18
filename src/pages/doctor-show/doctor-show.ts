import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Doctor} from "../../models/doctor";

/**
 * Generated class for the DoctorShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-show',
  templateUrl: 'doctor-show.html',
})
export class DoctorShowPage {
  private _doctor: Doctor;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._doctor = this.navParams.get("parameter") as Doctor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorShowPage');
  }

  get doctor(): Doctor {
    return this._doctor;
  }

}
