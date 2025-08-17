"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recreation_areas", [
      {
        name: "Churrasqueira",
        establishment_id: 1,
        recreation_area_type_id: 1,
      },
      {
        name: "Lareira",
        establishment_id: 1,
        recreation_area_type_id: 2,
      },
      {
        name: "Churrasqueira",
        establishment_id: 2,
        recreation_area_type_id: 1,
      },
      {
        name: "Lareira",
        establishment_id: 2,
        recreation_area_type_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recreation_areas", null, {});
  },
};
