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
        phone: "+55 11 98765-4321",
        password_hash: hashedPassword,
        birth_date: "1990-01-15",
        role: "admin",
      },
      {
        name: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        phone: "+55 21 99876-5432",
        password_hash: hashedPassword,
        birth_date: "1985-05-22",
        role: "admin",
      },
      {
        name: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        phone: "+55 31 99123-4567",
        password_hash: hashedPassword,
        birth_date: "1992-11-30",
        role: "customer",
      },
      {
        name: "Ana Costa",
        email: "ana.costa@example.com",
        phone: "+55 41 99234-5678",
        password_hash: hashedPassword,
        birth_date: "1988-07-10",
        role: "customer",
      },
      {
        name: "Pedro Santos",
        email: "pedro.santos@example.com",
        phone: "+55 51 99345-6789",
        password_hash: hashedPassword,
        birth_date: "1995-03-25",
        role: "owner",
      },
      {
        name: "Juliana Lima",
        email: "juliana.lima@example.com",
        phone: "+55 61 99456-7890",
        password_hash: hashedPassword,
        birth_date: "1998-09-18",
        role: "owner",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
