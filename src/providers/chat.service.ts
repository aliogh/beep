import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Channel } from '../models/channel/channel.interface';

@Injectable()

export class ChatService {
  constructor(private database: AngularFireDatabase) {

  }
  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({ name: channelName });
  }

  getChannelListRef(): FirebaseListObservable<Channel> {
    return this.database.list(`channel-names`);
  }
}


// db will  look: key-> room name
//-Kewjejejwk4324 (key)
  //-name: 'Ionic'
//-Kewjfdjkwer3213
  //-name: 'Angular'
//will allow us to go to channels/Angular/messages to retrieve all messages for that room
