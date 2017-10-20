"use strict";

module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    Name: DataTypes.STRING(100)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return Genre;
};