import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordValidators } from 'src/app/validators/match-password-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  //Vamos criar a validação do formulário de registro
  formRegister = new FormGroup({
    //Campo nome
    name: new FormControl('', [
      Validators.required, //Campo obrigatorio
      Validators.minLength(8), //Minimo de 8 caracteres
      Validators.maxLength(100) //Máximo de 100 caracteres
    ]),
    
    email: new FormControl('', [
      Validators.required,//Campo obrigatorio
      Validators.email //Validação de email
    ]),
    
    password: new FormControl('', [
      Validators.required, //Campo obrigatorio
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/), //Validação de formato de senha forte.
    ]),

    passwordConfirmation: new FormControl('', [
      Validators.required, //Campo obrigatório
    ])
  }, 
    //Adicionando validções customizadas
    {
      validators: [MatchPasswordValidators.matchPassword]//Passamos o nome da classe e o nome do método, validators é um array, podemos passar mais de uma validação
    }
  );

  //Função para permitir acesso aos campos do formulário.
  get form(): any {
    //Vamos retornar os valores do formulário
    return this.formRegister.controls
  }

  //Função para enviar o form
  onSubmit(): void {
    console.log(this.formRegister.value) //Imprimir os valores do formulario
  }
}
