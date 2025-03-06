/* Ejercicio una función que permite mostrar el reloj
en el elemento HTML con id="reloj" al presionar el botón con id="mostrar" */
function reloj() {
    let date = new Date();
    let hora = String(date.getHours()).padStart(2, "0");
    let minutos = String(date.getMinutes()).padStart(2, "0");
    let segundos = String(date.getSeconds()).padStart(2, "0");
    document.getElementById("reloj").textContent = hora + ":" + minutos + ":" + segundos;

}

reloj();
setInterval("reloj()", 1000);