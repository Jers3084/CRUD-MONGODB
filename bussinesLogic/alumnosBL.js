const {
  listarAlumnos,
  guardarAlumnoRepository, actualizarEdadRepository,
} = require("../repositorys/alumnosRepository");

const listarAlumnosActuales = async () => {
  const resultado = await listarAlumnos();
  return resultado;
};

const agregarAlumnoNuevo = async (
  nombre,
  apellido_paterno,
  apellido_materno,
  edad,
  sexo,
  direccion,
  estado_civil,
) => {
  const modelo = {
    nombre,
    apellido_paterno,
    apellido_materno,
    edad,
    sexo,
    direccion,
    estado_civil,
  }
  const resultado = await guardarAlumnoRepository(modelo);
  return resultado;
};

const actualizarEdadBL = async (id, edad) => {
   const result = await actualizarEdadRepository(id, edad);
}

module.exports = { listarAlumnosActuales, agregarAlumnoNuevo, actualizarEdadBL };
