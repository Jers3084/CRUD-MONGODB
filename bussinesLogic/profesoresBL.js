const {listarProfesores,
   buscarProfesorPorId,
   buscarProfesorPorNombre,
   guardarProfesorRepository,
   actualizarEdadRepository,
   eliminaPorIdRepository} = require ('../repositorys/profesorRepository');

   const listarProfesoresActuales = async () => {
      const resultado = await listarProfesores();
      return resultado;
    };
    
    const agregarProfesorNuevo = async (
      nombre,
      apellido_paterno,
      apellido_materno,
      edad,
      sexo,
      direccion,
      estado_civil,
    ) => {
      const resultado = await guardarProfesorRepository(
        nombre,
        apellido_paterno,
        apellido_materno,
        edad,
        sexo,
        direccion,
        estado_civil,
      );
      return resultado;
    };
    
    const actualizarEdadBL = async (id, edad) => {
       const result = await actualizarEdadRepository(id, edad);
    }
    
    module.exports = { listarProfesoresActuales, agregarProfesorNuevo, actualizarEdadBL };
    