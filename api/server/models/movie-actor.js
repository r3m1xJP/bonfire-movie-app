"use strict";

module.exports = function(sequelize, DataTypes) {
  var MovieActor = sequelize.define("MovieActor", {
    MovieId: DataTypes.BIGINT(20),
    ActorId: DataTypes.BIGINT(20)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return MovieActor;
};