import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildcardPage } from './buildcard';

@NgModule({
  declarations: [
    BuildcardPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildcardPage),
  ],
})
export class BuildcardPageModule {}
