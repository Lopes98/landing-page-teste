const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')

let imagemAtual = 0

/*- Esconder imagens
- Pegar imagens usando DOM e remover classe mostrar*/
function esconderImagens() {
  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  })
}

/*Mostrar imagens
- Pegar imagens, descobrir qual é a próxima e colocar classe mostrar*/
function mostrarImagens() {
  imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
  const totalDeImagens = imagensPainel.length - 1
  if (imagemAtual === totalDeImagens) {
    console.log('Não pode avancar mais')
    return
  }
  imagemAtual++

  esconderImagens()
  mostrarImagens()
})

setaVoltar.addEventListener('click', function () {
  if (imagemAtual === 0) {
    console.log('Não pode mais voltar')
    return
  }
  imagemAtual--

  esconderImagens()
  mostrarImagens()
})
