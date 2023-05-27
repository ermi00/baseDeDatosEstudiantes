let alumnos = []
let grupo1A = []
let grupo1B = []
let grupo1C = []
let grupo1D = []

function registrarAlumno(nombre, apellido, edad){
    let nuevoAlumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    console.log(`Nuevo alumno registrado: ${nuevoAlumno.nombre} ${nuevoAlumno.apellido}`)
    console.log(nuevoAlumno);
    alumnos.push(nuevoAlumno);
};
