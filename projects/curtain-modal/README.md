# CurtainModal

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Installation
[
npm i curtain-modal
]
## Add in Angualr Application
[

import { CurtainModalModule } from 'curtain-modal';


  imports: [
   
    CurtainModalModule

  ],

]
## Usage in Component
[
import { DialogService } from 'curtain-modal';

constructor(public dialog: DialogService){
   
  }


  createCurtain() {
   this.dialog.open(ExampleComponent, {}); 
   //---> ExampleComponent is component to show in curtain Modal
  }
]
