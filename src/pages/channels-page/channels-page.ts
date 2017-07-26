import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatService } from '../../providers/chat.service';

@IonicPage()
@Component({
  selector: 'page-channels-page',
  templateUrl: 'channels-page.html',
})
export class ChannelsPage {

  constructor(private chat: ChatService, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }

}
