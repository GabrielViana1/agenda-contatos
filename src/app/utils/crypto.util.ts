import * as CryptoJS from "crypto-js";

//Aqui estamos usando o CryptoJS para criptografar e descriptografar os dados
export function encryptData(data: string, key: string): string { //Função para criptografar os dados
    const encrypted =  CryptoJS.AES.encrypt(data, key).toString() //Aqui estamos passando a chave para criptografar os dados
    return encrypted
}

export function decryptData(data: string, key: string): string { //Função para descriptografar os dados
    const decrypted = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8) //Aqui estamos passando a chave para descriptografar os dados
    return decrypted
}