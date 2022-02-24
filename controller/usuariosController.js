const {
  listarUsuariosActuales,
  agregarUsuarioNuevo,
  actualizarPasswordBL,
  buscarUsuarioDB,
} = require("../bussinesLogic/usuariosBL");
const { comparePassword } = require("../helpers/passwordUtils");
const { generateToken } = require("../helpers/jwtUtils");

const response = { success: true, messages: "", data: [] };

const listarUsuarios = async (req, res) => {
  try {
    response.data = await listarUsuariosActuales();
    response.messages = "Ok";
    response.success = true;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = "No posee acceso";
    response.data = [];
    return res.status(500).json(response);
  }
};

const guardarNuevoUsuario = async (req, res) => {
  try {
    const { nombre, username, email, password } = req.body;
    const dtoUsuario = { nombre, username, email, password };
    response.data = await agregarUsuarioNuevo(dtoUsuario);

    return res.status(201).json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = "Error interno en el servidor";
    response.data = [];
    return res.status(500).json(response);
  }
};

const actualizaPassword = async (req, res) => {
  try {
    const { _id, edad } = req.body;
    const resultado = await actualizarPasswordBL(_id, edad);
    response.messages = "Password actualizado correctamente";
    response.data = resultado;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = "Error interno en el servidor";
    response.data = [];
    return res.status(500).json(response);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const findUser = await buscarUsuarioDB(username);
    if (!findUser) {
      (response.messages = "Usuario no encontrado"), (response.success = false);
      response.data = [];

      return res.status(404).json(response);
    }

    const compare = comparePassword(password, findUser.password);

    if (!compare) {
      response.messages = "Password invalido";
      response.success = false;
      response.data = [];
      return res.status(400).json(response);
    }

    const token = await generateToken(findUser);
    response.messages = "ok..";
    response.success = true;
    response.data = { user: findUser, token };
    return res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(response);
  }
};

module.exports = {
  listarUsuarios,
  guardarNuevoUsuario,
  actualizaPassword,
  login,
};
