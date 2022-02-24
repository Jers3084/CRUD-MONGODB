const Profesor = require("../models/profesoresModel");

const guardarProfesorRepository = async (
  nombre,
  apellido_paterno,
  apellido_materno,
  edad,
  sexo,
  direccion,
  estado_civil,
 ) => {
   const profesor = new Profesor({
     nombre,
     apellido_paterno,
     apellido_materno,
     edad,
     sexo,
     direccion,
     estado_civil,
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
 