import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorEditPage } from './doctor-edit';

@NgModule({
  declarations: [
    DoctorEditPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorEditPage),
  ],
})
export class DoctorEditPageModule {}
