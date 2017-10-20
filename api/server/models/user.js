"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: DataTypes.STRING(50),
    FirstName: DataTypes.STRING(50),
    LastName: DataTypes.STRING(50),
    Password: DataTypes.STRING(100)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return User;
};