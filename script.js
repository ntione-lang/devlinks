function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag imag
  const img = document.querySelector("#profile img");

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver no modo light, adicionar img light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // se tiver light mode, adicione a imagem dark
    img.setAttribute("src", "./assets/avatar.png");
  }
}
