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
      apellidoPaterno,
      apellidoMaterno,
      edad,
      sexo,
      direccion,
      estadoCivil
    ) => {
      const resultado = await guardarProfesorRepository(
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
    
    module.exports = { listarProfesoresActuales, agregarProfesorNuevo, actualizarEdadBL };
    