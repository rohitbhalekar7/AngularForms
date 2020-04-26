import { Component, OnInit } from '@angular/core';
import { IfrmPersonal } from './ifrm-personal';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }
  ofrmPersonal: IfrmPersonal = {
    peremail: '',
    pername: ''
  };
  ngOnInit(): void {

  }
  OnSubmit(frm: NgForm) {
    // console.log(frm.valid);
    if (frm.valid) {
      if (frm.value.email === frm.value.pername) {
        console.log('ok');
      } else {
        console.log('pass not match')
      }
    } else {
    }
  }
}
