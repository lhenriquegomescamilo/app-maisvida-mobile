import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {LoginProvider} from '../providers/login/login';
import {BaseHttpProvider} from '../providers/base-http/base-http';
import {HttpModule} from "@angular/http";
import {DoctorProvider} from '../providers/doctor/doctor';
import {DoctorNewPage} from "../pages/doctor-new/doctor-new";


const PAGES = [
  MyApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  DoctorNewPage
]

@NgModule({
  declarations: PAGES,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: PAGES,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    BaseHttpProvider,
    DoctorProvider
  ]
})
export class AppModule {
}
