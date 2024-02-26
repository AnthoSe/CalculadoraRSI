const { Schema, model } = require('mongoose');

const gastoSchema = new Schema({
    tipo: { type: String, required: true },
    ruc: { type: String, required: true },
    valor: { type: Number, required: true }
}, {
    timestamps: true
});

module.exports = model('Gasto', gastoSchema);
 