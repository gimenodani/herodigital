import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sign up for email updates';
  digitalForm!: FormGroup;
  status: boolean = false;
  message: string | undefined;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.digitalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      eMail: ['', Validators.required],
      euResident: ['', Validators.required],
      organization: [''],
      myCheckboxGroup: new FormGroup({
        advances: new FormControl(false),
        alerts: new FormControl(false),
        otherCom: new FormControl(false),
      }),
    });
  }


  openSelect(){
      this.status = !this.status;
  }

  onSubmit():void {
    if (!this.digitalForm.errors) {
      localStorage.setItem('status', 'success');
      localStorage.setItem('message', 'Thank you. You are now subscribed.')
      this.digitalForm.reset();
      this.message = 'Thank you. You are now subscribed.';
    } else {
      localStorage.setItem('status', 'error');
      localStorage.setItem('message', 'Invalid Subscription request.')
      this.digitalForm.reset();
      this.message = 'Invalid Subscription request.';
    }
  }
}
