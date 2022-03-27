const express = require("express");

const router = express.Router();
const mazoController = require("../controllers/mazo");

router.get("/api/nuevo", mazoController.nuevoMazo);

router.get("/api/dibujar/:idmazo/:naipes", mazoController.dibujarMazo);

module.exports = router;
