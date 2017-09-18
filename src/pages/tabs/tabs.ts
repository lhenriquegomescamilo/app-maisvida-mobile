import {Component} from '@angular/core';

import {AboutPage} from '../about/about';

import {DoctorNewPage} from "../doctor-new/doctor-new";
import {DoctorListPage} from "../doctor-list/doctor-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabDoctorNew = DoctorNewPage;
  tab2Root = AboutPage;
  tabListDoctors = DoctorListPage;


  constructor() {

  }
}
