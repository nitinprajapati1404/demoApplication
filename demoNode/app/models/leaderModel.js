"use strict";

module.exports = function (sequelize, DataTypes) {
    var leader = sequelize.define("leader", {
        leaderId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        leaderName: {type: DataTypes.STRING},
        leaderDesc: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return leader;
};