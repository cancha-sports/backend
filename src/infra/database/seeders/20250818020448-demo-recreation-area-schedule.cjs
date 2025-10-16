"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recreation_area_schedules", [
      {
        recreation_area_id: 1,
        opening_time: "14:00",
        closing_time: "23:00",
        usage_duration: 180,
        price_brl: 50,
        price_uyu: 400,
      },
      {
        recreation_area_id: 2,
        opening_time: "15:00",
        closing_time: "21:00",
        usage_duration: 180,
        price_brl: 50,
        price_uyu: 400,
      },
      {
        recreation_area_id: 3,
        opening_time: "17:00",
        closing_time: "23:00",
        usage_duration: 180,
        price_brl: 50,
        price_uyu: 400,
      },
      {
        recreation_area_id: 4,
        opening_time: "16:00",
        closing_time: "22:00",
        usage_duration: 180,
        price_brl: 50,
        price_uyu: 400,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recreation_area_schedules", null, {});
  },
};
