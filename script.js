// aplicação de Ação no Botão de Liga e Desliga o modo DARK e LIGHT
function toggleMode() {
  // Pegando o HTML
  const html = document.documentElement
  // Fazendo a troca das classes
  html.classList.toggle("light")

  // pegar a tag imagem
  const img = document.querySelector("#profile img") // é o seletor do CSS

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
