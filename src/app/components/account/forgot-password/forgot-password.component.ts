import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private NgxSpinnerService: NgxSpinnerService){}

 
  formForgotPassword = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })

  get form(): any {
    return this.formForgotPassword.controls //Pegando valores do formulario
  }

  onSubmit(): void {
    console.log(this.formForgotPassword.value) //Imprimindo valores quando submetido o formulario
    this.NgxSpinnerService.show()
  }
}
