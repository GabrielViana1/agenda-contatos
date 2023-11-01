import { AutenticationHelper } from 'src/app/helper/autentication.helper';
import { Injectable } from "@angular/core";
import {CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate { //implementar a interface CanActivate

    constructor(private autenticationHelper: AutenticationHelper) {} //Injetando o serviço de autenticação

    canActivate(): boolean {
        if (this.autenticationHelper.isSignedIn()) { //Verificando se o usuário está logado
            this.autenticationHelper.signOut(); //Vamos deslogar o usuário
            window.location.href = 'account/login'; //Vamos atualizar a página para que o usuário seja redirecionado para a tela de login
        }
        return true;
    }
}