const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  namecom: String,
  emailcom: {
    type: String,
    unique: true
  },
  passwordcom: String,
  cnpj: String, // Campo CNPJ
  addresscom: String, // Campo endereço
  phonecom: String // Campo telefone
});

const CompanyModel = mongoose.model('Company', companySchema);

module.exports = CompanyModel;