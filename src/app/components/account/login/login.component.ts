import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AutenticarRequestModel } from 'src/app/models/users/autenticar-request.model';
import { AutenticationHelper } from 'src/app/helper/autentication.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensagemErro = ''

  //Criando método construtor
  constructor(
    private userService: UserService, 
    private autenticationHelper: AutenticationHelper,
    private ngxSpinnerService: NgxSpinnerService
    ) {} //Injetando o serviço de usuário e o spinner.
  
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
    this.ngxSpinnerService.show() //Mostrando o spinner

    //Criando o model de envio para a API
    const model: AutenticarRequestModel = {
      email: this.formLogin.value.email as string,
      senha: this.formLogin.value.password as string
    }

    //enviamos para api
    this.userService.autenticar(model)
    .subscribe({ //pegando a resposta da api
      //se der sucesso
      next: (response) => {
        this.autenticationHelper.signIn(response) //Salvando os dados do usuario no localstorage. Chamando a função signIn do autenticationHelper
        //Redirecionar para a página de dashboard
        window.location.href = '/admin/dashboard' //Redirecionando para a página de dashboard
      },
      //se der erro
      error: (e) => {
        this.mensagemErro = e.error.message //Pegando a mensagem de erro da API
      }
    })
    .add(() => {
      this.ngxSpinnerService.hide() //Escondendo o spinner
    })

  }
}