const container = document.getElementById("container")
const Reiniciar = document.getElementById("Reiniciar")
const celdas = document.getElementsByClassName("cell")

let jugador = true;

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", function () {
        console.log(celdas[i]);
        celdas[i].innerHTML = "X";
        selector()
    });
    
}

function selector() {
   
    
    
    let ia =  Math.floor((Math.random() * 9));
    console.log(ia);
    celdas[ia].innerHTML = "O"


    //realizar proceso de validación de casillas (validar que casillas estan ocupadas)

        
    
    checkline(0,1,2)
    checkline(3,4,5)
    checkline(6,7,8)
    checkline(0,3,6)
    checkline(1,4,7)
    checkline(2,5,8)
    checkline(0,4,8)
    checkline(2,4,6)

    }

    function checkline(c1, c2, c3) {
        if(
        celdas[c1].innerHTML.length &&
        celdas[c1].innerHTML == celdas[c2].innerHTML &&
        celdas[c2].innerHTML == celdas[c3].innerHTML
  
    ){

        mostrarGanador(celdas[c1].innerHTML);

    }
}

function mostrarGanador(jugador) {
    document.querySelector("#resultado").innerHTML = jugador + "ganaste gg";
    
}

Reiniciar.addEventListener("click", function() {
    for(let index = 0; index < celdas.length; index++) {
    celdas[index].textContent = "";
    console.log("Reiniciar");
    }
})
