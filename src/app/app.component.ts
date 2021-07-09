import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sign up for email updates';
  digitalForm!: FormGroup;

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder) {
    this.createForm();
  }

  get f() {
    return this.digitalForm && this.digitalForm.controls;
  }

  createForm() {
    this.digitalForm = this.fb.group({
       firstName: ['', Validators.required ],
       lastName: ['', Validators.required ],
       eMail: ['', Validators.required],
       euResident: ['', Validators.required ],
       organization:[''],
       advances:[''],
       alerts:[''],
       otherCom:['']
    });
  }
}
