import { HttpClient } from "@angular/common/http";
import { CriarContaRequestModel } from "../models/users/criarConta-request.model";
import { Observable } from "rxjs";
import { CriarContaResponseModel } from "../models/users/criarConta-response.model";
import { environment } from "src/environments/environment.development";
import { Injectable } from "@angular/core";
import { AutenticarRequestModel } from "../models/users/autenticar-request.model";
import { AutenticarResponseModel } from "../models/users/autenticar-response.model";

//injectable é um decorator que permite que a classe seja injetada em outras classes

@Injectable({
    providedIn: 'root' //root é o escopo da injeção de dependencia, ou seja, a classe userService pode ser injetada em qualquer lugar da aplicação
})
export class UserService {
    //Injeção de dependencia do HttpClient que é responsavel por fazer as requisições HTTP
    constructor(private httpClient: HttpClient) { }


    //Metodo para executar a criação de conta na API
    //O model é o conteudo de envio da API
    //O obeservable é o modelo que a api vai retornar
    criarConta(model: CriarContaRequestModel): Observable<CriarContaResponseModel> {
        //Requisão post para o serviço de criação de conta
        return this.httpClient.post<CriarContaResponseModel>(environment.apiContatos + "/criar-conta", model); //Model é o conteudo de envio da API
    }

    autenticar(model: AutenticarRequestModel): Observable<AutenticarResponseModel> {
        //Requisão post para o serviço de criação de conta
        return this.httpClient.post<AutenticarResponseModel>(environment.apiContatos + "/autenticar", model); //Model é o conteudo de envio da API
    }
}
