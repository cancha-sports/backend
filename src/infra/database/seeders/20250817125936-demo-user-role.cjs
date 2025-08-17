"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_roles", [
      {
        name: "ADMIN",
      },
      {
        name: "USER",
      },
      {
        name: "COURT_OWNER",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_roles", null, {});
  },
};
