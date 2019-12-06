import { NgModule } from '@angular/core';
import { CurtainModalComponent } from './curtain-modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { InsertionDirective } from './dialog/insertion.directive';



@NgModule({
  declarations: [CurtainModalComponent, DialogComponent, InsertionDirective],
  imports: [CommonModule
  ],
  exports: [CurtainModalComponent],
  entryComponents: [DialogComponent],
})
export class CurtainModalModule { }
