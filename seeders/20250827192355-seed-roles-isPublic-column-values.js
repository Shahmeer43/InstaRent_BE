"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate(
      "roles",
      { isPublic: false },
      { name: "admin" }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate("roles", { isPublic: true }, {});
  },
};
