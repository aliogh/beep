import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChat } from './channel-chat';

@NgModule({
  declarations: [
    ChannelChat,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChat),
  ],
  exports: [
    ChannelChat
  ]
})
export class ChannelChatModule {}
