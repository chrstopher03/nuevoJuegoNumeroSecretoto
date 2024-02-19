


numeroSecreto=numeroAleatorio();
let intentos=1;


function asingnarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function limpiarCaja(){
    document.getElementById("valorUsuario").value="";
}
function condicionesIniciales(){
    asingnarTextoElemento("h1","juego del numero Secreto!");
    asingnarTextoElemento("p","Indica un numero del 1 al 10");
intentos=1
numeroSecreto=numeroAleatorio();
}



function reiniciarJuego(){
    //reiniciar el numero de intentos
    //generar un nuevo numero secreto
    //indicar el mensaje del intervalo de numeros
    //limpiar caja
    condicionesIniciales();
    //limpiar Caja
    limpiarCaja();
    //deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function verificarIntento(){
let numeroUsuario=parseInt(document.getElementById("valorUsuario").value);
if (numeroUsuario==numeroSecreto) {
    asingnarTextoElemento("p",`Felicidades,Acertaste el  numero en ${intentos} ${intentos==1 ? "vez" :"veces"}`);
document.getElementById("reiniciar").removeAttribute("disabled");
} else{
if (numeroUsuario>numeroSecreto) {
   asingnarTextoElemento("p", "el numero secreto es menor");
    }
    else{
        asingnarTextoElemento("p", "el numero secreto es mayor");
    }
     intentos++;
      limpiarCaja();
    }

}


function numeroAleatorio(){
    return Math.floor(Math.random()*10)+1;
}

condicionesIniciales();