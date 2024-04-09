import { AutenticationHelper } from 'src/app/helper/autentication.helper';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard {
    constructor(
        private autenticationHelper: AutenticationHelper,
        private router: Router
    ) {}

    //Método para verificar se a rota pode ser acessada
    canActivate(): boolean {
        if(this.autenticationHelper.isSignedIn()) {
            return true
        } else {
             //Trocar a rota do user para a página inicial (login)
             this.router.navigate(['/account/login'])
             return false
        }
    }
}