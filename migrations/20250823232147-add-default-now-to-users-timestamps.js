"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });

    await queryInterface.changeColumn("users", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.changeColumn("users", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
