'use strict';
const cripto = require('../services/cripto')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {  usuario: 'admin', nome: 'admin', senha: cripto.encrypt('admin') },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
