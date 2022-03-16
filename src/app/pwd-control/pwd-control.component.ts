import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('terminal') terminalDiv!: ElementRef;
  pwd? : PWD;

  constructor() { }

  ngOnInit(): void {
    _window().pwd = new PWD();
    _window().pwd.newSession([{ selector: ".term1" }],{baseUrl: 'https://pwd.learn.securednow.com',oauthProvider:"portal" },undefined);    
  }

}
