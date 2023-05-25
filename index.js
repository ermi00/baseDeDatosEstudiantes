let botonEnviarRegistroAlumnos = document.getElementById("botonEnviarRegistroAlumnos");
botonEnviarRegistroAlumnos.addEventListener("click", function(){

    let inputNombre = document.getElementById("inputNombre").value
    let inputApellido = document.getElementById("inputApellido").value
    let inputAEdad = document.getElementById("inputEdad").value

    registrarAlumno(inputNombre, inputApellido, inputAEdad);
    
});

let botonEnviarMaterias = document.getElementById("botonEnviarMaterias");
botonEnviarMaterias.addEventListener("click", function(){

    let selectMaterias = document.getElementById("Materias").value
    let selectTalleres = document.getElementById("Talleres").value
    let selectDeportivas = document.getElementById("Deportivas").value

    console.log(selectMaterias, selectTalleres, selectDeportivas);
});
