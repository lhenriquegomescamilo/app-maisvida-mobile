import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../User";
import {LoginProvider} from "../../providers/login/login";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {username: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private _loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this._loginProvider.findTokenByUsernameAndPassword(this.user);
  }

}
