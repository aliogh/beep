import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Channel } from '../models/channel/channel.interface';
import { ChannelMessage } from '../models/channel/channel-message.interface';

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

  getChannelChatRef(channelKey: string) {
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
     await this.database.list(`/channels/${channelKey}`).push(message);
  }
}
