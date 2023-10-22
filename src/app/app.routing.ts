import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/account/login/login.component";
import { RegisterComponent } from "./components/account/register/register.component";
import { ForgotPasswordComponent } from "./components/account/forgot-password/forgot-password.component";

//Mapeamento das rotas do módulo

//Para cada componente que criamos, precisamos adicionar uma rota.
const routes: Routes = [
    
    {path: '', redirectTo: 'account/login', pathMatch: 'full'}, //Esse é o componente que será carregado quando a aplicação for iniciada. 
    //O path: '' significa que o componente LoginComponent será carregado quando a URL for /.
    
    {path: 'account/login', component: LoginComponent}, //path: 'account/login' significa que o componente LoginComponent será carregado quando a URL for /account/login.
    {path: 'account/register', component: RegisterComponent}, //path: 'account/register' significa que o componente RegisterComponent será carregado quando a URL for /account/register.
    {path: 'account/forgot-password', component: ForgotPasswordComponent} //path: 'account/forgot-password' significa que o componente ForgotPasswordComponent será carregado quando a URL for /account/forgot-password.
]

//O decorator @NgModule é usado para definir um módulo.
@NgModule({
    imports: [RouterModule.forRoot(routes)], //O método forRoot() é usado para configurar as rotas raiz do módulo. Passamos o array de rotas como parâmetro.
    exports: [RouterModule] //O método exports é usado para tornar as diretivas, pipes e módulos disponíveis para módulos que importam este módulo.
}) 
//A clas appRoutingModule é um módulo que contém as rotas do módulo.
export class appRoutingModule {} 

