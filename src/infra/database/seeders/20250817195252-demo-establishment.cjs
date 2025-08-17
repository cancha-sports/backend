"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("establishments", [
      {
        name: "Arena Flu Soccer",
        latitude: -30.88799798934364,
        longitude: -55.52299142809508,
        owner_id: 1,
      },
      {
        name: "City Park",
        latitude: -30.902640871253432,
        longitude: -55.519035782151384,
        owner_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("establishments", null, {});
  },
};
