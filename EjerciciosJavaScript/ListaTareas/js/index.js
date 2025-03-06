/* Codigo javascript gestionar una lista de tareas 
1. El usuario debe poder ingresar tareas.
2. El usuario debe poder marcar tareas como completadas al hacer click en ellas.
3. El usuario debe poder marcar tareas como no completadas al hacer click en ellas cuando estan completadas 
(por defecto las tareas agregadas están no completadas).
4. El usuario debe poder ver la lista de tareas.
*/

let listaTareas = [];

//Función para agregar una tarea a la lista
function agregarTarea() {
    //let tarea = document.getElementById("inputTarea").value;
    let tarea = {
        nombre: document.getElementById("inputTarea").value,
        completada: false
    }
    listaTareas.push(tarea);
    document.getElementById("inputTarea").value = "";
    mostrarTareas();
}
//Función para mostrar la lista de tareas
function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    
    for (let i = 0; i < listaTareas.length; i++) {
        let tarea = document.createElement("li");
      
        // Añadir clase según el estado actual
        if (listaTareas[i].completada) {
            tarea.classList.add("completada");
        } else {
            tarea.classList.add("noCompletada");
        }
      
        tarea.addEventListener("click", function() {
            // Cambiar el estado
            listaTareas[i].completada = !listaTareas[i].completada;
            
            // Actualizar solo esta tarea, no toda la lista
            if (listaTareas[i].completada) {
                tarea.classList.remove("noCompletada");
                tarea.classList.add("completada");
            } else {
                tarea.classList.remove("completada");
                tarea.classList.add("noCompletada");
            }
        });
        
        tarea.textContent = listaTareas[i].nombre;
        lista.appendChild(tarea);
    }
}




//Agregar el evento click al botón
document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);