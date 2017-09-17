import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Doctor} from "../../models/doctor";
import {DoctorProvider} from "../../providers/doctor/doctor";


/**
 * Generated class for the DoctorNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-new',
  templateUrl: 'doctor-new.html',
})
export class DoctorNewPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _formBuilder: FormBuilder,
              private _doctorProvider: DoctorProvider) {
    this._initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorNewPage');
    // this._initForm();
  }

  private _initForm(): void {
    this.formGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      enable: ['true', [Validators.required]]
    })
  }

  onSubmit() {
    let doctor: Doctor = this.formGroup.value as Doctor;
    console.log(doctor);
    this._doctorProvider.create(doctor);
  }

}
