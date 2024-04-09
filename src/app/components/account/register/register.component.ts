import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from "src/app/services/user.service";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordValidators } from 'src/app/validators/match-password-validators';
import { CriarContaRequestModel } from 'src/app/models/users/criarConta-request.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  //Variaveis do component
  mensagemSucesso: string = ''
  mensagemErro: string = ''

  //Esses atributos serão inicializados por injeção de dependência.
  constructor(private userService: UserService, private ngxSpinnerService: NgxSpinnerService ) { }

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
    this.ngxSpinnerService.show() //Mostrando o spinner

    this.mensagemSucesso = ''
    this.mensagemErro = ''
    
    //Vamos pegar os dados do formulario, que precisamos para enviar para api
    const model: CriarContaRequestModel = {
      //acessa o formulario/valor do campo nome/nome do campo e define com string
      nome: this.formRegister.value.name as string,
      email: this.formRegister.value.email as string,
      senha: this.formRegister.value.password as string
    }
    //enviamos para api
    this.userService.criarConta(model).subscribe({ //pegando a resposta da api
      //se der sucesso
      next: (response) => {
        this.mensagemSucesso = `Parabéns, ${response.nome}! Sua conta foi criada com sucesso.`
        this.formRegister.reset()
      },
      //se der erro
      error: (e) => {
        this.mensagemErro = e.error.message
      }
    }).add(() => {
      this.ngxSpinnerService.hide()
    })

  }
}
