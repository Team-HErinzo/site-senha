const numeroSenha = document.querySelector('.parametro-senha_texto')
const botoes = document.querySelectorAll('.parametro-senha_botao')

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = aumentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

function diminuirTamanho(){
    console.log('teste')
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}

function aumentarTamanho(){
    console.log('teste')
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
}
