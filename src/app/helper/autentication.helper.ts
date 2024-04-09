import { Injectable } from "@angular/core";
import { AutenticarResponseModel } from "../models/users/autenticar-response.model";
import { decryptData, encryptData } from "../utils/crypto.util";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class AutenticationHelper {

    //chave dos dados na localstorage
    auth: string = 'auth'

    //Método para salvar os dados do usuario autecnticado no localstorage
    signIn(model: AutenticarResponseModel): void {
        
        //Converter o objeto model em json e cryprografar os dados
        const data = encryptData(JSON.stringify(model), environment.cryptoKey)
        //Salvar os dados no localstorage
        localStorage.setItem(this.auth, data)
    }

    //Metodo para verificar se o usuario esta autenticado (os dados do local storage são validos)
    isSignedIn(): boolean {
        const model = this.getData() //pegar os dados do localstorage
        //verificar se os dados existem
        if(model != null) {
            //verificar se o token é valido
            const dataAtual = new Date() //pegar a data atual
            const dataExpiracao = new Date(model.expiration as Date) //pegar a data de expiração do token
            //verificar se o token expirou
            if(dataAtual <= dataExpiracao) {
                return true //retornar true caso o token seja valido
            } else {
                this.signOut()
            }
        }

        return false
    }

    //Metodo para retornar os dados do local storage
    getData(): AutenticarResponseModel | null {
        //ler os dados do localstorage
        const data = localStorage.getItem(this.auth) //this.auth é a chave dos dados no localstorage
        //Verificar se os dados existem
        if(data != null) {
            //vamos descripografar os dados
            const model = JSON.parse(decryptData(data, environment.cryptoKey)) // environment.cryptoKey é a chave de criptografia
            return model //retornar os dados
        }

        return null //retornar nulo caso não existam dados
    }

    //Metodo para remover os dados do localstorage
    signOut(): void | null {
        localStorage.removeItem(this.auth)

    } 
} 