"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recreation_area_types", [
      {
        name: "Churrasqueira",
      },
      {
        name: "Lareira",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recreation_area_types", null, {});
  },
};
