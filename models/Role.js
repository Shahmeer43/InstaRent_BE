"use strict";

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "roles",
      timestamps: false,
    }
  );

  Role.associate = (models) => {
    Role.belongsToMany(models.User, {
      through: "user_roles",
      foreignKey: "roleId",
    });
  };

  return Role;
};
