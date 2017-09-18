import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorShowPage } from './doctor-show';

@NgModule({
  declarations: [
    DoctorShowPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorShowPage),
  ],
})
export class DoctorShowPageModule {}
