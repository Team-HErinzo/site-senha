const numeroSenha = document.querySelector('.parametro-senha_texto')
const botoes = document.querySelectorAll('.parametro-senha_botao')

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = aumentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

let maiucula = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function diminuirTamanho(){
    if (tamanhoSenha > 1) 
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}

function aumentarTamanho(){
    if (tamanhoSenha < 20)
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
}
