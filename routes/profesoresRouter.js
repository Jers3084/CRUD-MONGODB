const { Router } = require("express");
const {
  listarProfesores,
  guardarNuevoProfesor,
  actualizaEdad,
} = require("../controller/profesoresController");
const router = Router();

router.get("/", listarProfesores);
router.post("/", guardarNuevoProfesor);
router.put("/", actualizaEdad);

module.exports = router;
