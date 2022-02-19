const Profesor = require("../models/profesoresModel");

const guardarProfesorRepository = async (
   nombre,
   apeP,
   apeM,
   edad,
   sexo,
   direccion,
   estadoCivil
 ) => {
   const profesor = new Profesor({
     nombre: nombre,
     apellido_paterno: apeP,
     apellido_materno: apeM,
     edad: edad,
     sexo: sexo,
     direccion: direccion,
     estado_civil: estadoCivil,
   });
 
   const resultado = await profesor.save();
 
   return resultado;
 };
 
 const listarProfesores = async () => {
   return await Profesor.find();
 };
 
 const buscarProfesorPorId = async (idProfesor) => {
   return await Profesor.findById({ _id: idProfesor });
 };
 
 const buscarProfesorPorNombre = async (nombreProfesor) => {
   return await Profesor.find({ nombre: nombreProfesor });
 };
 
 const actualizarEdadRepository = async (idProfesor, edadProfesor) => {
   return await Profesor.findByIdAndUpdate(
     { _id: idProfesor },
     { edad: edadProfesor },
     { new: true }
   );
 };
 
 const eliminaPorIdRepository = async (idProfesor) => {
   return await Profesor.findByIdAndRemove({ _id, idProfesor });
 };
 
 module.exports = {
   listarProfesores,
   buscarProfesorPorId,
   buscarProfesorPorNombre,
   guardarProfesorRepository,
   actualizarEdadRepository,
   eliminaPorIdRepository,
 };
 