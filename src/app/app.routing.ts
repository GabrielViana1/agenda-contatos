import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/account/login/login.component";
import { RegisterComponent } from "./components/account/register/register.component";
import { ForgotPasswordComponent } from "./components/account/forgot-password/forgot-password.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { AdminGuard } from "./guards/admin.guard";
import { CreateContactComponent } from "./components/admin/create-contact/create-contact.component";
import { ListContactsComponent } from "./components/admin/list-contacts/list-contacts.component";
import { EditContactsComponent } from "./components/admin/edit-contact/edit-contacts.component";
import { LoginGuard } from "./guards/login.guard";
//Mapeamento das rotas do módulo

//Para cada componente que criamos, precisamos adicionar uma rota.
const routes: Routes = [
    
    {path: '', redirectTo: 'account/login', pathMatch: 'full'}, //Esse é o componente que será carregado quando a aplicação for iniciada. 
    //O path: '' significa que o componente LoginComponent será carregado quando a URL for /.
    
    {path: 'account/login', component: LoginComponent, canActivate: [LoginGuard]}, //path: 'account/login' significa que o componente LoginComponent será carregado quando a URL for /account/login e se o usuario estiver logado, ele será deslogado
    {path: 'account/register', component: RegisterComponent}, //path: 'account/register' significa que o componente RegisterComponent será carregado quando a URL for /account/register.
    {path: 'account/forgot-password', component: ForgotPasswordComponent}, //path: 'account/forgot-password' significa que o componente ForgotPasswordComponent será carregado quando a URL for /account/forgot-password.
    //path: 'admin/dashboard' significa que o componente DashboardComponent será carregado quando a URL for /admin/dashboard.
    {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminGuard]}, //Nessa rota apenas usuarios autenticados podem acessar, 
    //por isso chamamos canActivate e passamos o admin guard que verifica se o usuario pode acessar
    {path: 'admin/create-contact', component: CreateContactComponent, canActivate: [AdminGuard]},
    {path: 'admin/edit-contact/:id', component: EditContactsComponent, canActivate: [AdminGuard]}, //O ID ali no path, quer dizer que vamos passar um id como parametro para essa rota
    {path: 'admin/list-contacts', component: ListContactsComponent, canActivate: [AdminGuard]}

]

//O decorator @NgModule é usado para definir um módulo.
@NgModule({
    imports: [RouterModule.forRoot(routes)], //O método forRoot() é usado para configurar as rotas raiz do módulo. Passamos o array de rotas como parâmetro.
    exports: [RouterModule] //O método exports é usado para tornar as diretivas, pipes e módulos disponíveis para módulos que importam este módulo.
}) 
//A clas appRoutingModule é um módulo que contém as rotas do módulo.
export class appRoutingModule {} 

