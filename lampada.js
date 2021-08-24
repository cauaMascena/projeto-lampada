"use strict"

function ligarLampada() {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    lampada.src = "img/ligada.jpg"
    ligar.disabled = true
    deligar.disabled = false 
}
function desligarLampada() {
    lampada.src = document.getElementById("lampada")
    lampada.src = "img/desligada.jpg"

    lampada.src = "img/desligada.jpg"
    ligar.disabled = false
    deligar.disabled = true 
}
function quebrarLampada() {
    lampada.src = document.getElementById("lampada")
    lampada.src = "img/quebrada.jpg"
}

//  Eventos
document.getElementById("ligar")
.addEventListener("click", ligarLampada)

document.getElementById("desligar")
.addEventListener("click", desligarLampada)

document.getElementById("lampada")
.addEventListener("dblclick", quebrarLampada)