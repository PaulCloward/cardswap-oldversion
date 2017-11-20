import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendcardPage } from './sendcard';

@NgModule({
  declarations: [
    SendcardPage,
  ],
  imports: [
    IonicPageModule.forChild(SendcardPage),
  ],
})
export class SendcardPageModule {}
