var textoFantasia = window.document.querySelector("div.TextoFantasia")
var textoRomance = window.document.querySelector("div.TextoRomance")
var textoMisterio = window.document.querySelector("div.TextoMisterio")
var textoAventura = window.document.querySelector("div.TextoAventura")

var divFantasia = window.document.querySelector("div#DivFantasia")
var divRomance = window.document.querySelector("div#DivRomance")
var divMisterio = window.document.querySelector("div#DivMisterio")
var divAventura = window.document.querySelector("div#DivAventura")

function abrirF(){
  textoFantasia.style.backgroundColor = "#B198CE"
  textoRomance.style.backgroundColor = "#DFCAF5"
  textoMisterio.style.backgroundColor = "#DFCAF5"
  textoAventura.style.backgroundColor = "#DFCAF5"

  divFantasia.style.display = "flex"
  divRomance.style.display = "none"
  divMisterio.style.display = "none"
  divAventura.style.display = "none"
}

function abrirR() {
  textoFantasia.style.backgroundColor = "#DFCAF5"
  textoRomance.style.backgroundColor = "#B198CE"
  textoMisterio.style.backgroundColor = "#DFCAF5"
  textoAventura.style.backgroundColor = "#DFCAF5"

  divFantasia.style.display = "none"
  divRomance.style.display = "flex"
  divMisterio.style.display = "none"
  divAventura.style.display = "none"
}

function abrirM() {
  textoFantasia.style.backgroundColor = "#DFCAF5"
  textoRomance.style.backgroundColor = "#DFCAF5"
  textoMisterio.style.backgroundColor = "#B198CE"
  textoAventura.style.backgroundColor = "#DFCAF5"

  divFantasia.style.display = "none"
  divRomance.style.display = "none"
  divMisterio.style.display = "flex"
  divAventura.style.display = "none"
}

function abrirA() {
  textoFantasia.style.backgroundColor = "#DFCAF5"
  textoRomance.style.backgroundColor = "#DFCAF5"
  textoMisterio.style.backgroundColor = "#DFCAF5"
  textoAventura.style.backgroundColor = "#B198CE"

  divFantasia.style.display = "none"
  divRomance.style.display = "none"
  divMisterio.style.display = "none"
  divAventura.style.display = "flex"
}