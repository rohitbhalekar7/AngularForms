import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

function confirmEmailCheck(test: string): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    const email = c.get('email').value;
    const confirmemail = c.get('confirmemail').value;
    // console.log(email + confirmemail);
    // alert('dasdsad');
    // if()
    if (email !== confirmemail) {
      return { 'stringEqual': true };
    }
    return null;
  };
}
@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})

export class OfficialComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  oCustomer: Customer;
  frmCustomer: FormGroup;

  ngOnInit(): void {
    this.oCustomer = new Customer();

    // this.frmCustomer = new FormGroup({
    //   id: new FormControl(),
    //   name: new FormControl(),
    //   email: new FormControl(),
    //   confirmemail: new FormControl(),
    //   username: new FormControl('test'),
    //   password: new FormControl()

    // });
    this.frmCustomer = this.fb.group({
      perName: ['', [Validators.required, Validators.minLength(5)]],
      username: ['aa'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmemail: ['', [Validators.required]]

      }, { validator: confirmEmailCheck('sasa') }),

      password: ['']


    });
  }

}
