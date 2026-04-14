"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("courts", [
      {
        name: "Quadra de futebol",
        establishment_id: 1,
        sport: "soccer",
      },
      {
        name: "Quadra de futebol coberta",
        establishment_id: 2,
        sport: "soccer",
      },
      {
        name: "Quadra de futebol coberta 2",
        establishment_id: 2,
        sport: "soccer",
      },
      {
        name: "Quadra de futebol aberta",
        establishment_id: 2,
        sport: "soccer",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courts", null, {});
  },
};
