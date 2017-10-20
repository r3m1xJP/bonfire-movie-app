"use strict";

module.exports = function(sequelize, DataTypes) {
  var CollectionMovie = sequelize.define("CollectionMovie", {
    CollectionId: DataTypes.BIGINT(20),
    MovieId: DataTypes.BIGINT(20)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return CollectionMovie;
};