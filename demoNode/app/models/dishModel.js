"use strict";

module.exports = function (sequelize, DataTypes) {
    var dishes = sequelize.define("dish", {
        dishId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        dishName: {type: DataTypes.STRING},
        dishDesc: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return dishes;
};