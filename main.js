class LearningPath {
    constructor({
        name,
        cursos = [],
    }) {
        this.name = name;
        this.cursos = cursos;
    }

}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    cursos: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ],
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    cursos: [
        "Curso básico de Python",
        "Curso Avanzado de Python",
        "Data Analitic Básico",
    ],
});
const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
    cursos: [
        "Curso Básico de Programación",
        "Curso Básico de Udemy",
        "Curso Avanzado de Udemy",
    ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});