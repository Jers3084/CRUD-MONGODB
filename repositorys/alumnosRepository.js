const Alumno = require("..//models/alumnosModel");

const guardarAlumnoRepository = async (modelo) => {
  const alumno = new Alumno(modelo);

  const resultado = await alumno.save();

  return resultado;
};

const listarAlumnos = async () => {
  return await Alumno.find();
};

const buscarAlumnoPorId = async (idAlumno) => {
  return await Alumno.findById({ _id: idAlumno });
};

const buscarAlumnosPorNombre = async (nombreAlumno) => {
  return await Alumno.find({ nombre: nombreAlumno });
};

const actualizarEdadRepository = async (idAlumno, edadAlumno) => {
  return await Alumno.findByIdAndUpdate(
    { _id: idAlumno },
    { edad: edadAlumno },
    { new: true }
  );
};

const eliminaPorIdRepository = async (idAlumno) => {
  return await Alumno.findByIdAndRemove({ _id, idAlumno });
};

module.exports = {
  listarAlumnos,
  buscarAlumnoPorId,
  buscarAlumnosPorNombre,
  guardarAlumnoRepository,
  actualizarEdadRepository,
  eliminaPorIdRepository,
};
