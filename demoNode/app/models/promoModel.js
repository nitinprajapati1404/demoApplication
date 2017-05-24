"use strict";

module.exports = function (sequelize, DataTypes) {
    var promo = sequelize.define("promo", {
        promotionId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        promotinalName: {type: DataTypes.STRING},
        promotinalDesc: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return promo;
};