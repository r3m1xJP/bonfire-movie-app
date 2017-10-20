"use strict";

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    Name: DataTypes.STRING(100),
    ImageUrl: DataTypes.STRING(500)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return Actor;
};