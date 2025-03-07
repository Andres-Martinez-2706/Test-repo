/* Desarrollar un código en javascript que permita jugar al ahorcado. 
El usuario debe adivinar una palabra de 5 letras.
El usuario tiene 6 oportunidades para adivinar la palabra.
Si el usuario adivina la palabra, se muestra un mensaje de felicitaciones.
Si el usuario se queda sin oportunidades, se muestra un mensaje de derrota.
El usuario puede jugar de nuevo.
*/

let listaPalabras = ["perro", "gato", "elefante", "jirafa", "mono","gallina","tigre","oso","leon","serpiente"];
let palabraSecreta;
let intentosRestantes = 6;
let letrasUsadas = [];
document.getElementById("jugar").disabled = false;
document.getElementById("validar").disabled = true;
document.getElementById("reiniciar").disabled = true;

//Función para obtener la palabra segun los aciertos del usuario
function obtenerPalabra() {
    let palabra = "";
    
    return palabra;
}

//Función para iniciar el juego
function jugar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    console.log(palabraSecreta);
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas;
    document.getElementById("palabra").textContent = obtenerPalabra();
    document.getElementById("jugar").disabled = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("reiniciar").disabled = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        document.getElementById("palabra").textContent += "_ ";
    }
}   

//Función para reiniciar el juego
function reiniciar() {
    document.getElementById("jugar").disabled = false;
    document.getElementById("reiniciar").disabled = true;
    document.getElementById("palabra").textContent = "";
    jugar();

}

//Función para validar la letra ingresada por el usuario
function validarLetra() {
    let letra = document.getElementById("letra").value;
    if (letrasUsadas.includes(letra)) {
        alert("La letra ya ha sido usada");
    } else {
        letrasUsadas.push(letra);
        console.log(letrasUsadas);
        document.getElementById("letrasUsadas").textContent = letrasUsadas.join(", ");

        let temp = document.getElementById("palabra").textContent.split("");

        if (palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] == letra) {
                    temp[2*i] = letra;
                    console.log(temp);
                }
            }
            document.getElementById("palabra").textContent = temp.join("");
            let str = document.getElementById("palabra").textContent.replace(/\s+/g, "");
            console.log(str);

            if (str == palabraSecreta) {
                alert("Felicitaciones, has adivinado la palabra");
                document.getElementById("validar").disabled = true;
            }
        }else{
            alert("La letra no se encuentra en la palabra");
            intentosRestantes--;
            document.getElementById("intentosRestantes").textContent = intentosRestantes;
            if (intentosRestantes == 0) {
                alert("Lo siento, has perdido");
                reiniciar();
            }
        }
    }
    
}



//Agregar el evento click al los botones
document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("validar").addEventListener("click", validarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
