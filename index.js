let botonEnviarRegistroAlumnos = document.getElementById("botonEnviarRegistroAlumnos");
botonEnviarRegistroAlumnos.addEventListener("click", function(){

    let inputNombre = document.getElementById("inputNombre").value
    let inputApellido = document.getElementById("inputApellido").value
    let inputAEdad = document.getElementById("inputEdad").value

    registrarAlumno(inputNombre, inputApellido, inputAEdad);
});


function agregarAlumnoLista(){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.textContent = `${alumnos[0].nombre}`
};










// COMO CREAR O AGREGAR ALGO EN HTML
// let listaDeCompras = document.getElementById("listaDeCompras");
// let nuevoli = document.createElement("li")

// nuevoli.textContent = "Jamon Serrano"
// listaDeCompras.appendChild(nuevoli);

