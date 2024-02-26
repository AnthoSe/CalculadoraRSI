const express = require('express');
const router = express.Router();
const gastoControllers = require('../controllers/gasto.controllers');

router.get('/getAllReporte', gastoControllers.getAllReporte); // Mueve esta línea arriba de la siguiente
router.get('/', gastoControllers.getGastos);
router.get('/:id', gastoControllers.getGasto);
router.post('/registro', gastoControllers.addGasto);
router.delete('/deleteReporte/:reporteId', gastoControllers.deleteReporte);
// Actualizar la información de reporte
router.put('/updateReporte/:reporteId', gastoControllers.updateReporte);

module.exports = router;
