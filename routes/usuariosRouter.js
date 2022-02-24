const { Router } = require("express");
const { listarUsuarios, guardarNuevoUsuario, login } = require("../controller/usuariosController");
const { validateToken } = require ('../middleware/validateTokenMiddleware')
const router = Router();

router.get("/", validateToken, listarUsuarios);
router.post("/", guardarNuevoUsuario);
router.post("/login", login);

module.exports = router;
