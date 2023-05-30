const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  dateOfBirth: Date, // Campo de data de nascimento
  address: String, // Campo de endereço
  phone: String // Campo de telefone
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;