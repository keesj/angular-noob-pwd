import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IOutputData, SplitComponent } from 'angular-split'
 
import { PwdControl } from '../pwdcontrol';

import PWD from 'pwd-sdk';


function _window() : any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-pwd-control',
  templateUrl: './pwd-control.component.html',
  styleUrls: ['./pwd-control.component.css'],
  encapsulation: ViewEncapsulation.None,
})



export class PwdControlComponent implements OnInit {

  pwdcontrol : PwdControl = {
    id : 1,
    name : "Control",
    status: "Paused"
  };

 // @ViewChild('terminal') terminalDiv!: ElementRef;
  pwd? : PWD;
  
  constructor(private window: Window) { }

  ngOnInit(): void {
  }
  
  
  ngAfterViewInit (){

    console.warn("WARN");
    this.pwd = new PWD();

    this.pwd.newSession([{ selector: ".term1" },{ selector: ".term2" }],{baseUrl: 'http://localhost',oauthProvider:"portal" },undefined);   
  }

  
  dragEndHandler($event: IOutputData) {
    console.log('dragEndHandler', { event: $event })
    console.log(this.pwd);
    this.pwd?.resize();
  }

  splitGutterClick({ gutterNum }: IOutputData) {
    // By default, clicking the gutter without changing position does not trigger the 'dragEnd' event
    // This can be fixed by manually notifying the component
    // See issue: https://github.com/angular-split/angular-split/issues/186
    // TODO: Create custom example for this, and document it
    alert("HH");
  }
}
