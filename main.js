// Creacion de Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definito de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso) { 
        this.cursosAprobados.push(nuevoCurso);
    },
};

// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de responsive design");

// Creacion de Objeto Prototipo

function student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  /*   this.aprobarCurso = function(nuevoCurso) {  // Esta es una forma de crear metodos la segunda la vamos a crear por fuera de la funcion
        this.cursosAprobados.push(nuevoCurso);
    } */
}

student.prototype.aprobarCurso = function(nuevoCurso) {  // esta es la segunda opcion para crear metodos
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new student(
    "Juanita Alejandra",
    15,
    [
        "Introduccion a los videojuegos",
        "Gestion de personajes",
    ]
);

