"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("court_schedules", [
      {
        court_id: 1,
        opening_time: "14:00",
        closing_time: "22:00",
        game_duration: 60,
        price: 100,
      },
      {
        court_id: 2,
        opening_time: "15:00",
        closing_time: "23:00",
        game_duration: 60,
        price: 100,
      },
      {
        court_id: 3,
        opening_time: "17:00",
        closing_time: "23:00",
        game_duration: 60,
        price: 120,
      },
      {
        court_id: 4,
        opening_time: "16:00",
        closing_time: "22:00",
        game_duration: 60,
        price: 120,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("court_schedules", null, {});
  },
};
