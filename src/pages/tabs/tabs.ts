import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {DoctorNewPage} from "../doctor-new/doctor-new";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabDoctorNew = DoctorNewPage;
  tab2Root = AboutPage;


  constructor() {

  }
}
