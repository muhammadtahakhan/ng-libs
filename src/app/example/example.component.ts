import { Component, OnInit } from '@angular/core';
import { DialogConfig } from 'projects/curtain-modal/src/lib/dialog/dialog-config';
import { DialogRef } from 'projects/curtain-modal/src/lib/dialog/dialog-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(public config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    console.log('-->', this.config)
  }

  onClose() {this.dialog.close('some value');}

}
