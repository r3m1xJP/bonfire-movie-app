"use strict";

module.exports = function(sequelize, DataTypes) {
  var Collection = sequelize.define("Collection", {
    UserId: DataTypes.BIGINT(20),
    Name: DataTypes.STRING(100)
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return Collection;
};