import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class Message {
  selectedProfile: Profile

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
  }

}
