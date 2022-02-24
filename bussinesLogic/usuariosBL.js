const { listarUsuarios, guardarUsuarioRepository, buscarPorUsuario } = require ('../repositorys/usuarioRepository');
const { encryptPassword } = require ('../helpers/passwordUtils');

   const listarUsuariosActuales = async () => {
     return await listarUsuarios();
    };

    const agregarUsuarioNuevo = async (objUsuario) => {
       objUsuario.password = encryptPassword(objUsuario.password);
      return await guardarUsuarioRepository(objUsuario);
    };
    
    const buscarUsuarioDB = async (username) => {
       return await buscarPorUsuario(username);
    }
    const actualizarPasswordBL = async (id, password) => {
       password = encryptPassword(password);
       const result = await actualizarPasswordRepository(id, password);
    }
    

    module.exports = {listarUsuariosActuales, agregarUsuarioNuevo, buscarUsuarioDB, actualizarPasswordBL};