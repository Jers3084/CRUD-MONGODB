const Usuario = require("../models/usuariosModel");

const listarUsuarios = async () => {
  return await Usuario.find().select(
    {
      nombre: true,
      email: true,
    }
  );
};

const buscarPorUsuario = async (username) => {
  return await Usuario.findOne({ username })
   };

const guardarUsuarioRepository = async (model) => {
  const usuario = new Usuario(model);
  const resultado = await usuario.save();

  return resultado;
};

module.exports = { listarUsuarios, buscarPorUsuario, guardarUsuarioRepository };
