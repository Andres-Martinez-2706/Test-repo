/*
Consumir el endPoint de la API del clima Open-Meteo: 
- https://open-meteo.com/
- https://open-meteo.com/en/docs
- Ejemplo de petición
https://api.open-meteo.com/v1/forecast?latitude=7.1254&longitude=-73.1198&current=temperature_2m&hourly=temperature_2m&timezone=auto&past_days=3&forecast_days=3


Características para desarrollar: 
 - Cuando el sitio cargue se debe mostrar un gráfico con datos de prueba y la tabla sin datos
 - Cuando el usuario de click al botón buscar se debe hacer la solicitud de los datos a la API
 - Al recibir la respuesta del servidor se deben mapear los datos en la tabla y en el gráfico.
 - En caso de no encontrar datos o presentar un error se debe reportar por consola"
*/
function mostrarDatos(data){
    /*Escriba la lógica de la funcion */
    document.getElementById("v_lat").innerText = data.latitude;
    document.getElementById("v_long").innerText = data.longitude;
    document.getElementById("v_alt").innerText = data.elevation;
    document.getElementById("v_zone").innerText = data.timezone;
    document.getElementById("v_temp").innerText = data.current.temperature_2m + data.hourly_units.temperature_2m;
    document.getElementById("v_hour").innerText = data.current.time;
    grafico.data.labels = data.hourly.time;
    grafico.data.datasets = [{
        label: 'Temperatura',
        data: data.hourly.temperature_2m,
        borderWidth: 1
    }];
    grafico.update();

}
function cargarDatos(){
    let latitude = document.getElementById("latitud").value;
    let longitude = document.getElementById("longitud").value;

    let url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m&hourly=temperature_2m&timezone=auto&past_days=3&forecast_days=3";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Solicitud fallida");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            mostrarDatos(data);
        })
        .catch(error => {
            alert("Error en la solicitud");
        })
}

document.getElementById("buscar_datos").addEventListener('click',cargarDatos);

//Ejemplo de creación de Gráfico
const ctx = document.getElementById('grafico');

let grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2025-03-02T00:00', '2025-03-02T01:00', '2025-03-02T02:00', '2025-03-02T03:00', '2025-03-02T04:00'],
        datasets: [{
            label: 'Temperatura',
            data: [20.3, 20.5, 20.3, 20.1, 19.9, 19.7],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});