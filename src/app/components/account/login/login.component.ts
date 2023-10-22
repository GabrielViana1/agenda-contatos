import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  //Criando método construtor
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  
  //Criando estrutura do formulário.
  formLogin = new FormGroup({
    
    //Campo email
    email: new FormControl('', [
      Validators.required, //Validação de campo obrigatório.
      Validators.email //Validação de formato de email.
    ]),
    
    //Campo senha
    password: new FormControl('', [
      Validators.required, //Validação de campo obrigatório.
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/), //Validação de formato de senha forte.
    ])
  });

  //Função para permitir acesso aos campos do formulário.
  get form(): any { 
    //Retorna os campos do formulário.
    return this.formLogin.controls; //O controls devolve os forms controls.
  }
  
  //Função executada no submit do formulário.
  onSubmit(): void {
    //Vamos imprimir no console os valores do formulário.
    console.log(this.formLogin.value); //Imprime os valores do formulário., o this é necessário para acessar o formLogin e o value para acessar os valores.
    this.ngxSpinnerService.show()
  }
}