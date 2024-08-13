const numeroSenha = document.querySelector('.parametro-senha_texto');
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox')

console.log(checkbox[0].checked)

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = aumentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscula = "abcdefghijklmnopqrstuvwxyz"
let numero = "0123456789"
let simbolos = "!?@%*&"

geraSenha()
console.log(maiuscula);

function diminuirTamanho(){
    if (tamanhoSenha > 1){
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
    }
    geraSenha()
}

function aumentarTamanho(){
    if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
    }
    geraSenha()
}

function geraSenha(){
    let alfabeto = "";
    if(checkbox[0].checked){
        alfabeto = alfabeto + maiuscula
    }
    if(checkbox[1].checked){
        alfabeto = alfabeto + minuscula
    }
    if(checkbox[2].checked){
        alfabeto = alfabeto + numero
    }
    if(checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }

    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*maiuscula.length
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + maiuscula[numeroAleatorio];

        console.log(senha)
    }
    campoSenha.value = senha
}