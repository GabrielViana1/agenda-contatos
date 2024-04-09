import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent {

  constructor(
    private ngxSpinnerService: NgxSpinnerService
  ) {}

  formCreatContact = new FormGroup({
    
    nome: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(8),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    celular: new FormControl('', [
      Validators.required,
    ])
  })

  get form(): any {
    return this.formCreatContact.controls //Controls é a resposta do form
  }

  onSubmit(): void {
    this.ngxSpinnerService.show() //Mostrando o spinner
  }
}
