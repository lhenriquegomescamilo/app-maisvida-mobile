import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Doctor} from "../../models/doctor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorProvider} from "../../providers/doctor/doctor";
import * as _ from 'lodash';

/**
 * Generated class for the DoctorEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-edit',
  templateUrl: 'doctor-edit.html',
})
export class DoctorEditPage {
  private _doctor: Doctor;
  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _formBuilder: FormBuilder,
              private _doctorProvider: DoctorProvider) {

    this._doctor = this.navParams.get("parameter") as Doctor;
    this._initForm();


  }

  ionViewWillEnter() {

  }

  private _initForm(): void {
    this.formGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      enable: ['true', [Validators.required]]
    })
  }

  onSubmit(): void {
    let doctorFromPage = this.formGroup.value as Doctor;
    doctorFromPage.id = this._doctor.id;
    this._doctorProvider.update(doctorFromPage).subscribe(doctorUpdated => console.log(doctorUpdated)
      , error => {
        console.log(error);
      });
  }

  emailIsNotEmpty() {
    return !_.isEmpty(this._doctor.email);
  }

  get doctor(): Doctor {
    return this._doctor;
  }

  set doctor(doctor: Doctor) {
    this._doctor = doctor;
  }


}
