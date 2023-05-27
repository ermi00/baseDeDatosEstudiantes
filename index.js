let botonEnviarRegistroAlumnos = document.getElementById("botonEnviarRegistroAlumnos");
botonEnviarRegistroAlumnos.addEventListener("click", function(){

    let inputNombre = document.getElementById("inputNombre").value
    let inputApellido = document.getElementById("inputApellido").value
    let inputAEdad = document.getElementById("inputEdad").value

    if(inputAEdad.length > 2){
        alert("Ingresa una edad valida")
    } else{
        registrarAlumno(inputNombre, inputApellido, inputAEdad);
        agregarAlumnoLista();
    }
});


function agregarAlumnoLista(){
    let tablaAlumnos = document.getElementById("tablaAlumnos");
    let tablaAlumnosRef = tablaAlumnos.insertRow(-1);

    let nuevaCeldaRef = tablaAlumnosRef.insertCell(0);
    for (let i = 0; i < alumnos.length; i++){
        nuevaCeldaRef.textContent = `${alumnos[i].nombre}`
    }

    nuevaCeldaRef = tablaAlumnosRef.insertCell(1);
    for (let i = 0; i < alumnos.length; i++){
        nuevaCeldaRef.textContent = `${alumnos[i].apellido}`
    }

    nuevaCeldaRef = tablaAlumnosRef.insertCell(2);
    for (let i = 0; i < alumnos.length; i++){
        nuevaCeldaRef.textContent = `${alumnos[i].edad}`
    }

    nuevaCeldaRef = tablaAlumnosRef.insertCell(3);
    let nuevoInput = document.createElement("input");
    nuevoInput.type = "checkbox";
    nuevaCeldaRef.appendChild(nuevoInput);
}

function agregarGrupoAlumno(alumnoSeleccionado, grupoSeleccionado){
    alumnoSeleccionado.push(grupoSeleccionado);
}