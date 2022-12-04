const mongoose = require('mongoose');
mongoose.connect('');

const esquema = mongoose.Schema({
  nome: String,
  telefone: String,
  email: String
})

const info = mongoose.model(
  "informações", esquema
)