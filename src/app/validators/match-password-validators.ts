import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidators {
    //Criamos um método estático para validar os campos, metodos staticos não precisam ser instanciados
    static matchPassword(abstractControl: AbstractControl) { //Recebemos o abstractControl que é o formulário
        //Capturando o valor do campo password
        let password = abstractControl.get('password')?.value; 
        
        //Capturando o valor do campo passwordConfirmation
        let passwordConfirmation = abstractControl.get('passwordConfirmation')?.value

        //Verificando se os campos são iguais
        if(passwordConfirmation?.length > 0 && passwordConfirmation != password) {
            //Se os campos não forem iguais vamos setar um erro
            abstractControl.get('passwordConfirmation')?.setErrors({
                matchPassword: true 
            })
        }
        return null; //Se os campos forem iguais retornamos null
    }
}
