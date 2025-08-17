"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("@Teste123", 8);
    await queryInterface.bulkInsert("users", [
      {
        name: "João Silva",
        email: "joao.silva@example.com",
        phone: "11987654321",
        password_hash: hashedPassword,
        birth_date: "1990-01-15",
        role_id: 1,
      },
      {
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        phone: "21998765432",
        password_hash: hashedPassword,
        birth_date: "1985-05-22",
        role_id: 1,
      },
      {
        name: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        phone: "31991234567",
        password_hash: hashedPassword,
        birth_date: "1992-11-30",
        role_id: 2,
      },
      {
        name: "Ana Costa",
        email: "ana.costa@example.com",
        phone: "41992345678",
        password_hash: hashedPassword,
        birth_date: "1988-07-10",
        role_id: 2,
      },
      {
        name: "Pedro Santos",
        email: "pedro.santos@example.com",
        phone: "51993456789",
        password_hash: hashedPassword,
        birth_date: "1995-03-25",
        role_id: 3,
      },
      {
        name: "Juliana Lima",
        email: "juliana.lima@example.com",
        phone: "61994567890",
        password_hash: hashedPassword,
        birth_date: "1998-09-18",
        role_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
