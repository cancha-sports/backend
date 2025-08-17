"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_roles", [
      {
        id: 1,
        name: "ADMIN",
      },
      {
        id: 2,
        name: "USER",
      },
      {
        id: 3,
        name: "COURT_OWNER",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_roles", null, {});
  },
};
