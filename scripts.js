
let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')

function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    console.log(imagem)
    imagem.src = endereco
}
