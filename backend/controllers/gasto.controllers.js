const gasto = require('../models/gasto');
const Gasto = require('../models/gasto');
const GastoControllers = {};

GastoControllers.getGastos = async (req, res) => {
  try {
    const gastos = await Gasto.find();
    return res.status(200).json(gastos);
  } catch (error) {
    console.error('Error al obtener todos los gastos:', error);
    return res.status(500).json({ error: 'Error al obtener todos los gastos' });
  }
};

GastoControllers.getAllReporte = async (req, res) => {
  try {
    const gastos = await Gasto.find(); // Cambiado de Reporte a Gasto
    return res.json(gastos);
  } catch (error) {
    console.error('Error al obtener todos los gastos:', error);
    return res.status(500).json({ error: 'Error al obtener todos los gastos' });
  }
};

GastoControllers.getGasto = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (id === 'getAllGastos') {
      const gastos = await Gasto.find();
      return res.status(200).json(gastos);
    } else {
      const gasto = await Gasto.findById(id);
      // Resto de tu lógica para el caso cuando id no es "getAllGastos"
    }
  } catch (error) {
    console.error('Error al obtener gasto por ID:', error);
    return res.status(500).json({ error: 'Error al obtener gasto por ID' });
  }
};



GastoControllers.addGasto = async (req, res) => {
  try {
    const { tipo, ruc, valor } = req.body;
    const newGasto = new Gasto({ tipo, ruc, valor });
    await newGasto.save();
    return res.status(201).json(newGasto);
  } catch (error) {
    console.error('Error al agregar gasto:', error);
    return res.status(500).json({ error: 'Error al agregar gasto' });
  }
};

// Eliminar un usuario por ID
GastoControllers.deleteReporte = async (req, res) => {
  const reporteId = req.params.reporteId; // Cambiar reporterId a reporteId
  try {
    const deletedReporte = await Gasto.findByIdAndDelete(reporteId).exec();

    if (deletedReporte) {
      res.json({ mensaje: 'Reporte eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Reporte no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar Reporte:', error);
    res.status(500).json({ error: 'Error al eliminar Reporte' });
  }
};

// Actualizar la información de un usuario
GastoControllers.updateReporte = async (req, res) => {
  const reporteId = req.params.reporteId;
  const updatedReporteData = req.body;

  try {
    const updatedReporte = await gasto.findByIdAndUpdate(reporteId, updatedReporteData, { new: true }).exec();

    if (updatedReporte) {
      res.json(updatedReporte);
    } else {
      res.status(404).json({ error: 'El reporte que intentas actualizar no se encuentra.' });
    }
  } catch (error) {
    console.error('Error al actualizar gasto:', error);
    res.status(500).json({ error: 'Error al actualizar gasto' });
  }
};

module.exports = GastoControllers;
