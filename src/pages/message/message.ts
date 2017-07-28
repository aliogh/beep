import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/messages/message.interface';
import { MESSAGE_LIST } from '../../mocks/messages/messages';
import { AuthService } from '../../providers/auth.service';
import { DataService } from '../../providers/data.service';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile
  messageList: Message[]

  userId: string;
  userProfile: Profile;

  constructor(private auth: AuthService, private data: DataService, public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile
      this.userId = profile.$key
    })
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        userToId: this.userId,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        userFromId: this.userId,
        content: content
      }

      //can we send to server?
      console.log(message);

    } catch (e) {
      console.error(e);
    }
  }
}
