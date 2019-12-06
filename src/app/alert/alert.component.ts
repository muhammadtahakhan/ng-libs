import { Component, OnInit, Input, Output } from '@angular/core';
import { DialogConfig } from 'projects/curtain-modal/src/lib/dialog/dialog-config';
import { DialogRef } from 'projects/curtain-modal/src/lib/dialog/dialog-ref';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: string = "success";
  constructor(public config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
    console.log('onOverlayClicked');
    this.dialog.close('some value');
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
    console.log('onDialogClicked');

  }
}
