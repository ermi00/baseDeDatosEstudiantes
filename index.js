let botonEnviarRegistroAlumnos = document.getElementById("botonEnviarRegistroAlumnos");
botonEnviarRegistroAlumnos.addEventListener("click", function(){

    let inputNombre = document.getElementById("inputNombre").value
    let inputApellido = document.getElementById("inputApellido").value
    let inputAEdad = document.getElementById("inputEdad").value

    registrarAlumno(inputNombre, inputApellido, inputAEdad);

    let filaDeTabla = document.getElementById("tr");
    let nuevotd = document.createElement("td");

    nuevotd.textContent = `${alumnos[0].nombre}`
    filaDeTabla.appendChild(nuevotd);

    nuevotd.textContent = `${alumnos[0].apellido}`
    filaDeTabla.appendChild(nuevotd);
});


// COMO CREAR O AGREGAR ALGO EN HTML
// let listaDeCompras = document.getElementById("listaDeCompras");
// let nuevoli = document.createElement("li")

// nuevoli.textContent = "Jamon Serrano"
// listaDeCompras.appendChild(nuevoli);

