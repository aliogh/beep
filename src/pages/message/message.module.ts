import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Message } from './message';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Message,
  ],
  imports: [
    IonicPageModule.forChild(Message),
    ComponentsModule
  ],
  exports: [
    Message
  ]
})
export class MessageModule {}
