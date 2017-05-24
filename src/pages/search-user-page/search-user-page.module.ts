import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './search-user-page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    ComponentsModule
  ],
  exports: [
    SearchUserPage
  ]
})
export class SearchUserPageModule {}
