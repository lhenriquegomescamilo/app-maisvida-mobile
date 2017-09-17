import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorNewPage } from './doctor-new';

@NgModule({
  declarations: [
    DoctorNewPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorNewPage),
  ],
})
export class DoctorNewPageModule {}
