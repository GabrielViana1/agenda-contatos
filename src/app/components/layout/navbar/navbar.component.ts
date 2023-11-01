import { AutenticationHelper } from 'src/app/helper/autentication.helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn: boolean = false
  userName: string = ''
  userEmail: string = ''

  //Chamando o método de auntenticação
  constructor(private autenticationHelper: AutenticationHelper) {}

  //Verificando se o usuario pode autenticar (se o token é valido)
  ngOnInit(): void {
    this.isSignedIn = this.autenticationHelper.isSignedIn()
    if(this.isSignedIn) {
      //capturar os dados do user
      const data = this.autenticationHelper.getData()
      this.userName = data?.nome as string
      this.userEmail = data?.email as string
    }
  }

  //Método para fazer o logout
  logout(): void {
    if(confirm('Deseja realmente sair do sistema?')) {
      this.autenticationHelper.signOut() //Método para deslogar o usuario
      window.location.href = 'account/login' //E retorna o usuario para tela login
    }
  }

}
