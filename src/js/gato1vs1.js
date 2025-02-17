const container = document.getElementById("container")
const Reiniciar = document.getElementById("Reiniciar")
const celdas = document.getElementsByClassName("cell")
const JvsJ = document.getElementById("JvsJ")
const Multijugador = document.getElementById("Multijugador")


let jugador = true;

let ModoJuego= "";
    

for (let i = 0; i < celdas.length; i++) {
celdas[i].addEventListener("click",selector);
  
}
function selector(e) {
    let CellValue = e.target.innerHTML;
    if (!CellValue.length) {
        e.target.innerHTML =jugador ? "x" :"o";
        jugador =!jugador;

        checkline(0, 1, 2);
        checkline(3, 4, 5);
        checkline(6, 7, 8);
        checkline(0, 3, 6);
        checkline(1, 4, 7);
        checkline(2, 5, 8);
        checkline(0, 4, 8);
        checkline(6, 4, 2);
    }
}
function checkline(c1, c2, c3) {
    if(
        celdas[c1].innerHTML.length &&
        celdas[c1].innerHTML === celdas[c2].innerHTML &&
        celdas[c2].innerHTML === celdas[c3].innerHTML 
      
    ){
        mostrarGanador(celdas[c1].innerHTML);
    }
}

function mostrarGanador(jugador) {
    document.querySelector("#Resultado").innerHTML = jugador + " Ganó la partida"
}

Reiniciar.addEventListener("click", function() {
    for(let index = 0; index < celdas.length; index++) {
    celdas[index].textContent = "";
    document.querySelector("#resultado").innerHTML = "";
    console.log("Reiniciar");
    }
})
