function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("variação")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("variação")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }



if (html.classList.contains("variação")) {
  img.setAttribute("alt", "foto de wesley light")
} else {
  img.setAttribute("alt", "foto de wesley black desenho")
}

}
