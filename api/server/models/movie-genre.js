"use strict";

module.exports = function(sequelize, DataTypes) {
  var MovieGenre = sequelize.define("MovieGenre", {
    MovieId: DataTypes.BIGINT(20),
    GenreId: DataTypes.BIGINT(20)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return MovieGenre;
};