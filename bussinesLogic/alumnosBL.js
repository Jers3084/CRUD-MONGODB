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
  apellidoPaterno,
  apellidoMaterno,
  edad,
  sexo,
  direccion,
  estadoCivil
) => {
  const resultado = await guardarAlumnoRepository(
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    edad,
    sexo,
    direccion,
    estadoCivil
  );
  return resultado;
};

const actualizarEdadBL = async (id, edad) => {
   const result = await actualizarEdadRepository(id, edad);
}

module.exports = { listarAlumnosActuales, agregarAlumnoNuevo, actualizarEdadBL };
