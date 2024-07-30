const numeroSenha = document.querySelector('.parametro-senha_texto')
const botoes = document.querySelectorAll('.parametro-senha_botao')

botoes[0].onclick = diminuirTamanho

function diminuirTamanho(){
    console.log('teste')
}
numeroSenha.textContent = 6
