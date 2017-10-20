"use strict";

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    Title: DataTypes.STRING(100),
    Overview: DataTypes.STRING(1000),
    ReleaseDate: DataTypes.DATEONLY,
    ImageUrl: DataTypes.STRING(500)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return Movie;
};